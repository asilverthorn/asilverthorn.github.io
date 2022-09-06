/* Based in part on https://github.com/marcrobledo/RomPatcher.js/blob/master/js/formats/ips.js */

const IPS_MAGIC = 'PATCH';
const IPS_MAX_SIZE=0x1000000; //16 megabytes
const IPS_RECORD_RLE=0x0000;
const IPS_RECORD_SIMPLE=0x01;

class IpsPatcher {
    constructor(uri) { 
        this.records = [];
        this.truncate = false;
        this.parsePromise = this.parseFile(uri)
        this.uri = uri
    }

    addSimpleRecord(offset, data) {
        this.records.push({offset:offset, type:IPS_RECORD_SIMPLE, length:data.length, data:data})
    }

    addRleRecord(offset, length, b) {
        this.records.push({offset:offset, type:IPS_RECORD_RLE, length:length, byte:b})
    }

    async parseFile(uri) {
        return fetch(uri)
            .then(result => result.arrayBuffer())
            .then(arrayBuffer => {
                let u8Array = new Uint8Array(arrayBuffer);
                let loc = 0 // location in file
                let startString = readString(u8Array, loc, 5)
                let numRleRecord = 0
                let numSimpleRecord = 0
                if(startString.startsWith(IPS_MAGIC)) {
                    loc += 5
                    while(loc < u8Array.length) {
                        var offset = readU24(u8Array, loc)
                        loc += 3
            
                        if(offset === 0x454f46) { /* EOF */
                            if(loc = u8Array.length) {
                                break;
                            } else if((loc+3)===u8Array.length) {
                                this.truncate=readU24(u8Array, loc);
                                loc += 3
                                break;
                            }
                        }
            
                        let length = readU16(u8Array, loc);
                        loc += 2
                        if(length===IPS_RECORD_RLE) {
                            length = readU16(u8Array, loc);
                            loc += 2
                            let b = readU8(u8Array, loc);
                            loc += 1
                            this.addRleRecord(offset, length, b);
                            numRleRecord++
                        } else {
                            let data = readBytes(u8Array, loc, length)
                            loc += length
                            this.addSimpleRecord(offset, data);
                            numSimpleRecord++
                        }
                    }
                }
                else {
                    throw "Unexpected start of file: " + startString
                }
            });
    }

    async apply(romFile) {
        //wait for the file parsing to complete before proceeding
        await this.parsePromise

        console.log("Applying IPS Patch: " + this.uri)
        //calculate target ROM size, expanding it if any record offset is beyond target ROM size
        var newFileSize=romFile.getNumBytes();
        for(var i=0; i<this.records.length; i++){
            var rec=this.records[i];
            if(rec.type===IPS_RECORD_RLE){
                if(rec.offset+rec.length>newFileSize){
                    newFileSize=rec.offset+rec.length;
                }
            }else{
                if(rec.offset+rec.data.length>newFileSize){
                    newFileSize=rec.offset+rec.data.length;
                }
            }
        }

        romFile.extend(newFileSize)

        for(var i=0; i<this.records.length; i++){
            if(this.records[i].type===IPS_RECORD_RLE){
                for(var j=0; j<this.records[i].length; j++)
                    romFile.setByte(this.records[i].offset+j, this.records[i].byte);
            }else{
                romFile.setBytes(this.records[i].offset, this.records[i].data);
            } 
        }
    }

} 
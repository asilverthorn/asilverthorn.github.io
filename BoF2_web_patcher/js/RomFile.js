
//TODO: read from config file
const headerSize = 0x200;
const originalSize = 3145728;
const headeredSize = headerSize + originalSize;
const validHash = "fede9d4aec8c35ed11e2868c3c517bce53ee3e6af724085c92500e99e43e63de";

/**
 * Used to read the rom file into a modifiable Uint8Array and generate new files.
 * Intended to be agnostic to the specific file.
 */
class RomFile {

    constructor(
        romInput, //DOM element for the file input
        errorDiv, //DOM element where errors should be written
        generateBtn //DOM element for the Generate button to enable/disable based on file read success
        ) {
        this.romInput = romInput
        this.errorDiv = errorDiv
        this.generateBtn = generateBtn
    }

    // read the file specified by romInput
    read() {
        let file = this.romInput.files[0];
        this.name = file.name;

        let reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = async() => {
            this.u8Array = new Uint8Array(reader.result);
            console.log("Read " + this.u8Array.byteLength + " bytes");
            this.u8Array = RomFile.removeHeader(this.u8Array);

            let result = await RomFile.validROM(this.u8Array);
            if(!result.success) {
                //error reading -- display it and disable the Generate button
                console.error(result.message)
                this.errorDiv.textContent = result.message
                this.errorDiv.style.display = "block";
                this.generateBtn.disabled = true
            } else {
                // successfully read -- allow the generate button to be clicked
                this.errorDiv.style.display = "none"
                this.generateBtn.disabled = false
            }
        }
    }


    //if ROM is headered, remove the header
    static removeHeader(rom) {
        if (rom.length === headeredSize) {
            return rom.slice(headerSize);
        }
        return rom;
    }

    //is this a valid rom?
    // credit to AtmaTek from ff6wc.com
    static async validROM(rom) {
        if (rom.length !== originalSize) {
            return {
                success : false,
                message : "Invalid ROM size: " + rom.length
            };
        }
    
        let romHashData = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", rom)));
        let romHashHex = romHashData.map(value => value.toString(16).padStart(2, '0')).join('');
        if (romHashHex !== validHash) {
            return {
                success : false,
                message : "Invalid ROM hash:" + romHashHex
            };
        }
        return {
            success : true,
            message : ""
        };
    }

    getName() {
        return this.name
    }

    getNumBytes() { 
        return this.u8Array.length
    }

    extend(newFileSize) {
        if(newFileSize > this.u8Array.length) {
            //create a new array of the specified size and copy over the existing data
            let newU8Array = new Uint8Array(newFileSize)
            for(var i=0; i<this.u8Array.length; i++){
                newU8Array[i]=this.u8Array[i];
            }

            this.u8Array = newU8Array
        }
    }

    setBytes(offset, value) {
        for(var i=0;i<value.length;i++)
            this.u8Array[offset+i]=value[i]
    }

    setByte(offset, b) {
        this.u8Array[offset] = b
    }

    getByte(offset) {
        return this.u8Array[offset]
    }

    getFileBaseExt() {
        let extIndex = this.name.lastIndexOf(".")
        let ext = this.name.substr(extIndex)
        let baseName = this.name.substr(0, extIndex)
        return [baseName, ext]
    }

    setGenerateName(name) {
        this.generateName = name
    }
    async generate() {
        let [baseName, ext] = this.getFileBaseExt()
        let modifiedName = baseName + this.generateName
        let zipFile = await new JSZip().file(modifiedName + ext, this.u8Array, {binary: true}).generateAsync({type: "blob"});
        await saveAs(zipFile, modifiedName + ".zip")
    }

}
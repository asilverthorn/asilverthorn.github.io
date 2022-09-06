/**
 * Applies patches to Breath of Fire 2 SNES ROM based on index.html options.
 */
class BoF2Patcher {
    constructor(romFile) {
        this.retranslationElement = document.getElementById("retranslation")
        this.maesonElement = document.getElementById("maeson")
        this.reduceDungeonEncRateElement = document.getElementById("reduceDungeonEncRate")
        this.warpLvl1Element = document.getElementById("warpLvl1")

        this.romFile = romFile
        this.modName = ""
    }

    async generate() {
        await this.applyRetranslation()
        await this.applyMaeson()
        await this.applyReduceDungeonEncRate()
        
        this.romFile.setGenerateName(this.modName)
        this.modName = "" // reset
        await this.romFile.generate()
    }

    async applyRetranslation() {
        if(this.retranslationElement.checked) {
            let patcher = new IpsPatcher('/patch/retrans/Breath of Fire 2 Retranslation (v1.2b).ips')
            await patcher.apply(this.romFile)

            /**
             * Offsets 0x0fac0 - 0x0facb (inclusive) are where the asm lives that performs the Retranslation's first time validity check.
             * Disable it by writing 0xEA's (NOPs) there 
             */
            for(var offset = 0x0fac0; offset<=0x0facb; offset++) {
                this.romFile.setByte(offset, 0xea)
            }

            this.modName += "_retranslation"
        }
    }

    async applyMaeson() {
        let path = '/patch/maeson/orig'
        if(this.retranslationElement.checked) {
            path = '/patch/maeson/retrans'
        }
        if(this.maesonElement.selectedIndex != 0) { /* not None */ 
            if(this.maesonElement.selectedIndex == 1) { /* A */
                path = path + '/A 1-02.ips'
                this.modName += "_maesonA"
            } else { /* B */
                path = path + '/B 1-02.ips'
                this.modName += "_maesonB"
            }

            let patcher = new IpsPatcher(path)
            await patcher.apply(this.romFile)
        }
    }

    async applyReduceDungeonEncRate() {
        //  c55a60 - c55b95 is a table with 2 bytes per non-overworld area. If the first byte is 00 - 04, that specifies the encounter rate (dancing monster in menu).
        //  If the first byte is 9#, that indicates that it's a conditional battle, such that it also checks a memory address using the lower nybble as an offset
        //  Known offsets:
        //  4 = Mt. Futabi (conditional enc - at most 16)
        //  A = Forest north of Collosea
        //  C = Mt. Rocco Cave Entrance (no enc)
        //  E, 10 = Mt. Rocco Cave (enc)
        //  20 = Witch Twr 1 (no enc)
        //  22 = Witch Twr 2

        if(this.reduceDungeonEncRateElement.checked) {
            const ENC_TABLE_START = 0x055a60
            const ENC_TABLE_END = 0x055b95
            const ENC_TABLE_SIZE = 2

            for(var offset = ENC_TABLE_START; offset<=ENC_TABLE_END; offset+=ENC_TABLE_SIZE) {
                //set every non-zero encounter rate to 0x01 to reduce encounters
                let currentByte = this.romFile.getByte(offset)
                if(currentByte != 0 && currentByte < 0x90) {
                    this.romFile.setByte(offset, 0x01)
                }
            }
            this.modName += "_reducedEncRate"
        }
    }
}
import { sha256 } from "ethereum-cryptography/sha256"
import { utf8ToBytes, toHex } from "ethereum-cryptography/utils"

const COLORS = ["red", "green", "blue", "pink", "yellow"]

export default function findColor(hash) {
    const colorHash = COLORS.map((color) => {
        let colorBytes = utf8ToBytes(color)
        return sha256(colorBytes)
    })

    for (let i = 0; i < colorHash.length; i++) {
        if (toHex(colorHash[i]) === toHex(hash)) {
            return COLORS[i]
        }
    }
    return null
}

import { assert } from "chai"
import { utf8ToBytes } from "ethereum-cryptography/utils"
import findColor from "../findColor.js"

const COLORS = ["red", "green", "blue", "pink", "yellow"]

describe("findColor", () => {
    COLORS.forEach((color) => {
        it(`should work for ${color}`, () => {
            assert.equal(findColor(utf8ToBytes(color)), color)
        })
    })
})

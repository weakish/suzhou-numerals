import { strict as assert } from 'assert'
import { encode, decode } from './index.js'

const examples = [
    ["123", "〡二〣"],
    ["21", "〢一"],
    ["4022", "〤〇〢二"],
    ["4312", "〤〣一〢"],
    ["1922", "〡〩〢二"],
    ["85", "〨〥"],
    ["342", "〣〤〢"],
    ["98", "〩〨"],
    ["7", "〧"],
    ["10", "〡〇"],
    ["1", "〡"],
]

for (const e of examples) {
    assert.strictEqual(encode(e[0]), e[1])
    assert.strictEqual(decode(e[1]), e[0])
}

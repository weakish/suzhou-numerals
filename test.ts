import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { decode, encode, fromNumber, toNumber } from "./mod.ts";

const examples: [string, string][] = [
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
];

const nonStandardExamples: [string, string][] = [
  ["一二三", "123"],
  ["〡〢〣", "123"],
];

Deno.test("encode & decode", () => {
  for (const e of examples) {
    assertEquals(fromNumber(parseInt(e[0])), e[1]);
    assertEquals(toNumber(e[1]), parseInt(e[0]));
    assertEquals(encode(e[0]), e[1]);
    assertEquals(decode(e[1]), e[0]);
  }
  for (const nse of nonStandardExamples) {
    assertEquals(decode(nse[0]), nse[1]);
  }
});

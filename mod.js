// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const hangzhou = [
    "〇",
    "〡",
    "〢",
    "〣",
    "〤",
    "〥",
    "〦",
    "〧",
    "〨",
    "〩", 
];
const hangzhou_alternative = [
    "一",
    "二",
    "三", 
];
function decodeSequence(seq) {
    return seq.map((c)=>{
        if (hangzhou_alternative.includes(c)) {
            return hangzhou_alternative.indexOf(c) + 1;
        } else {
            return hangzhou.indexOf(c);
        }
    });
}
function decode(s) {
    const h = [
        ...s
    ];
    const digits = decodeSequence(h);
    return digits.join("");
}
function toNumber(s, radix = 10) {
    return parseInt(decode(s), radix);
}
function rewrite_with_alternatives(h) {
    h.forEach((c, i, arr)=>{
        const one_two_three = hangzhou.slice(1, 4);
        if (one_two_three.includes(c)) {
            if (one_two_three.includes(arr[i - 1])) {
                arr[i] = hangzhou_alternative[hangzhou.indexOf(c) - 1];
            }
        }
    });
    return h;
}
function encode(n) {
    return rewrite_with_alternatives([
        ...n.toString()
    ].map((d)=>hangzhou[parseInt(d)])).join("");
}
function fromNumber(n, radix = 10) {
    return encode(n.toString(radix));
}
export { decode as decode };
export { toNumber as toNumber };
export { encode as encode };
export { fromNumber as fromNumber };

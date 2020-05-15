"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var hangzhou = [
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
var hangzhou_alternative = [
    "一",
    "二",
    "三",
];
function decode(s) {
    return __spreadArrays(s).map(function (c) {
        if (hangzhou_alternative.indexOf(c) === -1) {
            if (hangzhou.indexOf(c) === -1) {
                throw new TypeError("failed to decode " + c);
            }
            else {
                return hangzhou.indexOf(c).toString();
            }
        }
        else {
            return (hangzhou_alternative.indexOf(c) + 1).toString();
        }
    }).join("");
}
exports.decode = decode;
function rewrite_with_alternatives(without_alternatives) {
    without_alternatives.forEach(function (c, i, arr) {
        var one_two_three = hangzhou.slice(1, 4);
        if (one_two_three.includes(c)) {
            if (one_two_three.includes(arr[i - 1])) {
                arr[i] = hangzhou_alternative[hangzhou.indexOf(c) - 1];
            }
        }
    });
    return without_alternatives;
}
function encode(n) {
    return rewrite_with_alternatives(__spreadArrays(n.toString()).map(function (d) { return hangzhou[parseInt(d)]; }))
        .join("");
}
exports.encode = encode;

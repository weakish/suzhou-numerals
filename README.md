# suzhou-numerals

Encoding and decoding [Suzhou numerals] in JavaScript.

[Suzhou numerals]: https://en.wikipedia.org/wiki/Suzhou_numerals

## Usage

```js
console.log(suzhouNumerals.decode('〡二〣')) // '123'
console.log(suzhouNumerals.encode('123')) // '〡二〣'
```

This module works with Deno.
To use it in browser, clone this repository and run `deno bundle mod.ts suzhou-numerals.js`, then import the generated javascript file in the web page. 
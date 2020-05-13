# suzhou-numerals

Encoding and decoding [Suzhou numerals] in JavaScript.

[Suzhou numerals]: https://en.wikipedia.org/wiki/Suzhou_numerals

## Usage

```js
import * as suzhouNumerals from 'suzhou-numerals'

console.log(suzhouNumerals.decode('〡二〣')) // '123'
console.log(suzhouNumerals.encode('123')) // '〡二〣'
```
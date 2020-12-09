# suzhou-numerals

Encoding and decoding [Suzhou numerals] in TypeScript.

[Suzhou numerals]: https://en.wikipedia.org/wiki/Suzhou_numerals

## Usage

### Deno

```js
import * as suzhouNumerals from 'https://deno.land/x/suzhou_numerals/mod.ts'
console.log(suzhouNumerals.encode('123')) // '〡二〣'
```

### Browser

```js
<script type="module">
import * as suzhouNumerals from 'https://cdn.jsdelivr.net/gh/weakish/suzhou-numerals@master/mod.js'
console.log(suzhouNumerals.decode('〡二〣')) // '123'
</stript>
```

## License

0BSD
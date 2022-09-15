# suzhou-numerals

Encoding and decoding [Suzhou numerals] in TypeScript.

[Suzhou numerals]: https://en.wikipedia.org/wiki/Suzhou_numerals

## Import

Deno

```js
import * as suzhouNumerals from "https://deno.land/x/suzhou_numerals@0.1.0/mod.ts";
```

Browser

```html
<script type="module">
import * as suzhouNumerals from 'https://cdn.jsdelivr.net/gh/weakish/suzhou-numerals@0.1.0/mod.js'
</script>
```

## API

```js
// same as fromNumber(123, 10)
suzhouNumerals.fromNumber(123)) // "〡二〣"
// same as toNumber("〡二〣", 10)
suzhouNumerals.toNumber("〡二〣")) // 123

suzhouNumerals.encode("123")) // "〡二〣"
suzhouNumerals.decode("〡二〣")) // "123"
```

## License

0BSD
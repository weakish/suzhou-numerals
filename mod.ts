// 蘇州号碼 (Suzhou Numerals) is also called 花碼 (ホワマー).
type HowamaaZero = "〇";
type HowamaaOne = "〡" | "一";
type HowamaaTwo = "〢" | "二";
type HowamaaThree = "〣" | "三";
type HowamaaFour = "〤";
type HowamaaFive = "〥";
type HowamaaSix = "〦";
type HowamaaSeven = "〧";
type HowamaaEight = "〨";
type HowamaaNine = "〩";
export type Howamaa =
  | HowamaaZero
  | HowamaaOne
  | HowamaaTwo
  | HowamaaThree
  | HowamaaFour
  | HowamaaFive
  | HowamaaSix
  | HowamaaSeven
  | HowamaaEight
  | HowamaaNine;
export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

const hangzhou: readonly Howamaa[] = [
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

const hangzhou_alternative: readonly Howamaa[] = [
  "一",
  "二",
  "三",
];

function decodeSequence(seq: Howamaa[]): Digit[] {
  return seq.map((c) => {
    if (hangzhou_alternative.includes(c)) {
      return hangzhou_alternative.indexOf(c) + 1 as Digit;
    } else {
      return hangzhou.indexOf(c) as Digit;
    }
  });
}

export function decode(s: string): string {
  const h: Howamaa[] = [...s] as Howamaa[];
  const digits: Digit[] = decodeSequence(h);
  return digits.join("");
}

export function toNumber(s: string, radix = 10): number {
  return parseInt(decode(s), radix);
}

function rewrite_with_alternatives(h: Howamaa[]): Howamaa[] {
  h.forEach((c, i, arr) => {
    const one_two_three: Howamaa[] = hangzhou.slice(1, 4);
    if (one_two_three.includes(c)) {
      if (one_two_three.includes(arr[i - 1])) {
        arr[i] = hangzhou_alternative[hangzhou.indexOf(c) - 1];
      }
    }
  });
  return h;
}

export function encode(n: string): string {
  return rewrite_with_alternatives(
    [...n.toString()].map((d) => hangzhou[parseInt(d)]),
  )
    .join("");
}

export function fromNumber(n: number, radix = 10): string {
  return encode(n.toString(radix));
}

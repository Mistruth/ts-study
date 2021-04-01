import type { Equal, Expect } from '../../utils'

type GetReturnString<T extends string[], D extends string> = 
  T extends [infer R, ...infer E]
  ? E['length'] extends 0
  ? T[0]
  : E extends string[]
  ? `${T[0]}${D}${GetReturnString<E, D>}`
  : never
  : ''

declare function Join<D extends string>(params: D): <T extends string[]> (...args: T) => GetReturnString<T, D>

// ts根据函数签名自动推断

const noCharsOutput = Join('-')();
const oneCharOutput = Join('-')('a');
const noDelimiterOutput = Join('')('a', 'b', 'c');

// Regular cases
const hyphenOutput = Join('-')('a', 'b', 'c');
const hashOutput = Join('#')('a', 'b', 'c');
const twoCharOutput = Join('-')('a', 'b');
const longOutput = Join('-')('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h');

type cases = [
    Expect<Equal<typeof noCharsOutput, ''>>,
    Expect<Equal<typeof oneCharOutput, 'a'>>,
    Expect<Equal<typeof noDelimiterOutput, 'abc'>>,
    Expect<Equal<typeof twoCharOutput, 'a-b'>>,
    Expect<Equal<typeof hyphenOutput, 'a-b-c'>>,
    Expect<Equal<typeof hashOutput, 'a#b#c'>>,
    Expect<Equal<typeof longOutput, 'a-b-c-d-e-f-g-h'>>,
]


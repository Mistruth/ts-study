export type LengthOfString<T extends string, N extends any[] = []> =
    T extends `${infer R}${infer E}` 
    ? LengthOfString<E, [...N, R]> : N['length']
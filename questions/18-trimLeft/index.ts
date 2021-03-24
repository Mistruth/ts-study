type Space = '\n' | '\t' | ' '

export type TrimLeft<T extends String> = T extends `${Space}${infer R}` ? TrimLeft<R> : T

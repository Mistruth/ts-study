type Space = ' ' | '\n' | '\t';
type TrimLeft<S extends string> = S extends `${Space}${infer R}` ? TrimLeft<R> : S;
type TrimRight<S extends string> = S extends `${infer L}${Space}` ? TrimRight<L> : S;
export type Trim<S extends string> = TrimRight<TrimLeft<S>>;
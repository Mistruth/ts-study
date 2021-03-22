export type Last<T extends any[]> = 
  T extends [infer E, ...infer R] ? 
    R['length'] extends 0 ? E : Last<R> : never
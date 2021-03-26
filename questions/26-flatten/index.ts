export type Flatten<T extends any[], U extends any[] = []> =
  T extends [infer R, ...infer E] 
  ? R extends any[]
  ? Flatten<[...R, ...E], [...U]> 
  : Flatten<[...E], [...U, R]> 
  : U
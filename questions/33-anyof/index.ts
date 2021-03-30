type Bool<T> = T extends 1 ? true :
  T extends string ? T extends '' ? false : true :
  T extends boolean ? T :
  T extends any[] ? (T['length'] extends 0 ? false : true) :
  T extends object ? (keyof T extends never ? false : true) :
  false;

export type AnyOf<T extends readonly any[]> = T extends [infer R, ...infer Rest] ? (Bool<R> extends true ? true : AnyOf<Rest>) : false;
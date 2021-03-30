export type IsNever<T> = [T] extends [never] ? true : false

// never represents no type here

// type IsNever2<T> = Equal<never, T>
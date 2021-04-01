export type FilterOut<T extends any[], EX, R extends any[] = []> = 
  T extends [infer U, ...infer K]
  ? [U] extends [EX] // not distribute
  ? FilterOut<K, EX, R>
  : FilterOut<K, EX, [...R, U]>
  : R
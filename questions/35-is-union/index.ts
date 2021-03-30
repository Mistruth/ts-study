export type IsUnion<T extends any, R extends any[] = [], K = T> = 
  R['length'] extends number
  ? true
  : K extends K
  ? IsUnion<Exclude<T, K>, [...R, T]>
  : never

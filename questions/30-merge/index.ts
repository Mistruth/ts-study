export type Merge<T extends any, U extends any> = {
  [R in keyof T | keyof U]: R extends keyof U ? U[R] : R extends keyof T ? T[R] : never
}
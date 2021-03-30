export type Diff<T, U> = {
  [P in (Exclude<keyof T, keyof U> | Exclude<keyof U, keyof T>)]: P extends keyof T ? T[P] : P extends keyof U ? U[P] : never
}
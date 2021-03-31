type A = {
  name?: string
  age: number
}

type B = keyof A
// 可选属性,如果没有非空校验，会有undefined值

type NoUndefined<T> = T extends undefined ? never : T

type RequiredKeys<T extends any, K extends keyof T = keyof T> = 
  K extends keyof T 
  ? T[K] extends NoUndefined<T[K]>
  ? K
  : Omit<T, K> extends T
  ? never
  : K
  : never

export type GetRequired<T> = {
  [P in RequiredKeys<T>] : T[P]
}

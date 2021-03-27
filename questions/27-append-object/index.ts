export type AppendToObject<T, KEY extends string, VALUE extends any> = {
  [P in keyof T | KEY]: P extends keyof T ? T[P]: VALUE
}
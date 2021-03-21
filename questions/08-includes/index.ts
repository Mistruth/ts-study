export type Includes<T extends any[], R extends any> = 
  R extends T[number] ? true : false

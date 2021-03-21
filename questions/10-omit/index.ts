type MyPick<T, K extends keyof T> = {
  [P in K]: T[P] 
}

type MyExclude<T, U> = T extends U ?  never: T

export type MyOmit<T, R extends keyof any> =  MyPick<T, MyExclude<keyof T, R>>
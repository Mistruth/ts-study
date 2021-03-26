
type A = '1' | '2' | '3'

export type Permutation<T extends any, K = T> = 
  [T] extends [never] 
    ? []
    : K extends K // 很关键 Type unions get distributed over conditionals (((((条件语句可以造成unions的遍历
    ? [K, ...Permutation<Exclude<T, K>>]
    : never
  
  // 


type B = Exclude<A, '1'>
export type StringToUnion<T extends string, ARR extends string[] = []> =
  T extends `${infer R}${infer E}` 
  ? R extends string 
  ? StringToUnion<E, [...ARR, R]>
  : StringToUnion<E, ARR>
  : ARR[number]


// 数组中取出所有的值 用T[number]
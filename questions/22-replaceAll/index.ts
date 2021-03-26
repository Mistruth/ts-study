export type ReplaceAll<T extends string, FROM extends string, TO extends string> = 
  FROM extends '' ? T :
    T extends `${infer R}${FROM}${infer E}` ? 
      `${R}${ReplaceAll<`${TO}${E}`, FROM, TO>}` : T
    
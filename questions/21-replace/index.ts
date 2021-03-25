export type Replace<T extends string, From extends string, To extends string> =
  From extends '' ? T : 
    T extends `${infer R}${From}${infer E}` ? `${R}${To}${E}` : T
     
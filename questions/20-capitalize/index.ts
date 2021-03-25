export type Capitalize<T extends string = ''> = 
  T extends `${infer U}${infer R}` ? `${Uppercase<U>}${R}` : T
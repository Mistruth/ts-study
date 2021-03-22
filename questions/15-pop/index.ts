export type Pop<T extends any[]> = 
  T extends [...infer E, infer R] ? 
    R extends any ? E : never : never
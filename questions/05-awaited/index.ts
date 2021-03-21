export type Awaited<T extends Promise<any>> =
  T extends Promise<infer P> ? P : never

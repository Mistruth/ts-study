export type AppendArgument<T extends (...arg: any[]) => any, P> = 
  T extends (...args: infer R) => infer E ? 
    (...args: [...R, P]) => E : never
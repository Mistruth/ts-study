export type CamelCase<S> = S extends `${infer Start}-${infer Next}${infer End}`
  ? Next extends '-' | Uppercase<Next>
    ? `${Start}-${CamelCase<`${Next}${End}`>}`
    : CamelCase<`${Start}${Uppercase<Next>}${End}`>
  : S
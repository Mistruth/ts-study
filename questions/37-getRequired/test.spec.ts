import type { Equal, Expect } from '../../utils'
import type { GetRequired } from './index'


type cases = [
  Expect<Equal<GetRequired<{ foo: number, bar?: string }>, { foo: number }>>,
  Expect<Equal<GetRequired<{ foo: undefined, bar?: undefined }>, { foo: undefined }>>,
]


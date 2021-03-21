import type { Awaited } from './index'
import type { Equal, Expect } from '../../utils'

type X = Promise<string>
type Y = Promise<{ field: number }>


type cases = [
  Expect<Equal<Awaited<X>, string>>,
  Expect<Equal<Awaited<Y>, { field: number }>>,
]

import type { Last } from './index'
import type { Equal, Expect } from '../../utils'


type A = Last<[3, 2, 1]>


type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]

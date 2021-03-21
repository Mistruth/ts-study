import type { MyReadOnly } from './index'
import type { Equal, Expect } from '../../utils'

interface Dog {
  name: string
}

interface Cat {
  readonly name: string
}

type PickProps = MyReadOnly<Dog>

type Test = Expect<Equal<PickProps, Cat>>

import type { MyPick } from './index'
import type { Equal, Expect } from '../../utils'


interface Dog {
  name: string
  age: number
  gender: boolean
}

interface Cat {
  name: string
}

type PickProps = MyPick<Dog, 'name'>


type A = [
  Expect<Equal<PickProps, Cat>>
]

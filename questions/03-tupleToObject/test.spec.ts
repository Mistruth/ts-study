import type { TupleToObject } from './index'
import type { Equal, Expect } from '../../utils'

const tuple = ['tesla', 'model 3'] as const

type MyObject = TupleToObject<typeof tuple>

type Test = Expect<Equal<MyObject, {
  tesla:'tesla',
  'model 3': 'model 3'
}>>
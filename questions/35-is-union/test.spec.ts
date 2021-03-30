import type { Equal, Expect } from '../../utils'
import type { IsUnion } from './index'

type case1 = Equal<IsUnion<string>, false>  // false
type case2 = Equal<IsUnion<string|number>, true>  // true
type case3 = Equal<IsUnion<[string|number]>, false> // false
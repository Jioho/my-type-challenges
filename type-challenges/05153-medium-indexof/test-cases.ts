import type { Equal, Expect } from '@type-challenges/utils'
import { IndexOf1 } from './template'

type cases = [
  Expect<Equal<IndexOf1<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf1<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf1<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf1<[string, 1, number, 'a'], number>, 2>>,
  Expect<Equal<IndexOf1<[string, 1, number, 'a', any], any>, 4>>
]

type testIndexOf1 = IndexOf1<[string, 1, number, 'a', any], any>

type testIndexOf12 = IndexOf1<[1, 2, 3], 2>
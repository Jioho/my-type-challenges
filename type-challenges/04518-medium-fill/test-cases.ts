import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Fill1<[], 0>, []>>,
  Expect<Equal<Fill1<[], 0, 0, 3>, []>>,
  Expect<Equal<Fill1<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill1<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
  Expect<Equal<Fill1<[1, 2, 3], 0>, [0, 0, 0]>>,
  Expect<Equal<Fill1<[1, 2, 3], true>, [true, true, true]>>,
  Expect<Equal<Fill1<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
  Expect<Equal<Fill1<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
  Expect<Equal<Fill1<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill1<[1, 2, 3], true, 0, 10>, [true, true, true]>>,
]

type testFill1 = Fill1<[1, 2, 3], 0, 2, 2>
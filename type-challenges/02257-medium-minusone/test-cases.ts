import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MinusOne1<1>, 0>>,
  Expect<Equal<MinusOne1<55>, 54>>,
  Expect<Equal<MinusOne1<3>, 2>>,
  Expect<Equal<MinusOne1<100>, 99>>,
  Expect<Equal<MinusOne1<1101>, 1100>>,
]

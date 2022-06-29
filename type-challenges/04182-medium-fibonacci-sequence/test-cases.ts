import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Fibonacci1<3>, 2>>,
  Expect<Equal<Fibonacci1<8>, 21>>,
]
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<If1<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If1<false, 'a', 2>, 2>>,
]

// @ts-expect-error
type error = If1<null, 'a', 'b'>

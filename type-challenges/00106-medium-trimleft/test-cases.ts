import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimLeft1<'str'>, 'str'>>,
  Expect<Equal<TrimLeft1<' str'>, 'str'>>,
  Expect<Equal<TrimLeft1<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft1<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft1<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft1<''>, ''>>,
  Expect<Equal<TrimLeft1<' \n\t'>, ''>>,
]

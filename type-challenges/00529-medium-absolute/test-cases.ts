import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Absolute1<0>, '0'>>,
  Expect<Equal<Absolute1<-0>, '0'>>,
  Expect<Equal<Absolute1<10>, '10'>>,
  Expect<Equal<Absolute1<-5>, '5'>>,
  Expect<Equal<Absolute1<'0'>, '0'>>,
  Expect<Equal<Absolute1<'-0'>, '0'>>,
  Expect<Equal<Absolute1<'10'>, '10'>>,
  Expect<Equal<Absolute1<'-5'>, '5'>>,
  Expect<Equal<Absolute1<-1_000_000n>, '1000000'>>,
  Expect<Equal<Absolute1<9_999n>, '9999'>>
]

type testEqual = Absolute1<'-0'>

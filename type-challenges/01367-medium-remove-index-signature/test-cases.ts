import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  [key: string]: any
  foo(): void
}

type Bar = {
  [key: number]: any
  bar(): void
}

type FooBar = {
  [key: symbol]: any
  foobar(): void
}

type Baz = {
  bar(): void
  baz: string
}

type cases = [
  Expect<Equal<RemoveIndexSignature1<Foo>, { foo(): void }>>,
  Expect<Equal<RemoveIndexSignature1<Bar>, { bar(): void }>>,
  Expect<Equal<RemoveIndexSignature1<FooBar>, { foobar(): void }>>,
  Expect<Equal<RemoveIndexSignature1<Baz>, { bar(): void; baz: string }>>,
]

type testRemoveIndexSignature1 = RemoveIndexSignature1<Foo>
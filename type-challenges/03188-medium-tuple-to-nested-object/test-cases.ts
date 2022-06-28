import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToNestedObject1<['a'], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject1<['a', 'b'], number>, { a: { b: number } }>>,
  Expect<Equal<TupleToNestedObject1<['a', 'b', 'c'], boolean>, { a: { b: { c: boolean } } }>>,
  Expect<Equal<TupleToNestedObject1<[], boolean>, boolean>>,
]

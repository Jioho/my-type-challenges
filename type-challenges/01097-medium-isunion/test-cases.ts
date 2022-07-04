import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsUnion1<string>, false >>,
  Expect<Equal<IsUnion1<string|number>, true >>,
  Expect<Equal<IsUnion1<'a'|'b'|'c'|'d'>, true >>,
  Expect<Equal<IsUnion1<undefined|null|void|''>, true >>,
  Expect<Equal<IsUnion1<{ a: string }|{ a: number }>, true >>,
  Expect<Equal<IsUnion1<{ a: string|number }>, false >>,
  Expect<Equal<IsUnion1<[string|number]>, false >>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion1<string|never>, false >>,
  Expect<Equal<IsUnion1<string|unknown>, false >>,
  Expect<Equal<IsUnion1<string|any>, false >>,
  Expect<Equal<IsUnion1<string|'a'>, false >>,
]

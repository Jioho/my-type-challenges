type Combination<T extends string[], U = T[number], A = U> = U extends string ? `${U} ${Combination<T, Exclude<A, U>>}` | U : never

type testExclude = Exclude<'foo' | 'bar' | 'baz', 'foo' | 'baz'>

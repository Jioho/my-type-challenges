type UnionToIntersection<T> =
  (T extends any ? (_: T) => any : never) extends
  (_: infer I) => any ? I : never

type testUnionToIntersection = UnionToIntersection<'foo' | 42 | true>
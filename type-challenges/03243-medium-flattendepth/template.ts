type FlattenDepth1<T extends unknown[], D extends number = 1, C extends 1[] = []> = D extends C['length']
  ? T
  : T extends [infer F, ...infer Rest]
  ? F extends unknown[]
    ? [...FlattenDepth1<F, D, [...C, 1]>, ...FlattenDepth1<Rest, D, C>]
    : [F, ...FlattenDepth1<Rest, D, C>]
  : T

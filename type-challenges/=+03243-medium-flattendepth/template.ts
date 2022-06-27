type FlattenDepth<T extends unknown[], D = 1, L extends unknown[] = []> = D extends L['length']
  ? T
  : T extends [infer F, ...infer P]
  ? F extends unknown[]
    ? [...FlattenDepth<F, D, [...L, 1]>, ...FlattenDepth<P, D, [...L]>]
    : [F, ...FlattenDepth<P, D, L>]
  : T

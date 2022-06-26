type Combination<T extends string[], U extends string[] = T> =
  T extends [infer F, ...infer Rest] ? Combination<F,>
type Zip<T extends unknown[], T2 extends unknown[], R extends unknown[] = []> = T['length'] extends 0
  ? R
  : T2['length'] extends 0
  ? R
  : T extends [infer F, ...infer Rest]
  ? T2 extends [infer F2, ...infer Rest2]
    ? Zip<Rest, Rest2, [...R, [F, F2]]>
    : never
  : never

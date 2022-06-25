type Chunk<T extends unknown[], C extends number, Temp extends unknown[] = [], R extends unknown[] = []> = Temp['length'] extends C
  ? Chunk<T, C, [], [...R, Temp]>
  : T extends [infer F, ...infer Rest]
  ? Chunk<Rest, C, [...Temp, F], R>
  : Temp extends [] ? R : [...R, Temp]

type testchunk = Chunk<[1, 2, 3], 2>

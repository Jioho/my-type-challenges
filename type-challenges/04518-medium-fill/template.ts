type Fill1<T extends unknown[], N, Start extends number = 0, End extends number = T['length'], C extends 1[] = [], C1 extends 1[] = [1], R extends unknown[] = []> = T extends [
  infer F,
  ...infer Rest
]
  ? Start extends C['length']
    ? End extends C['length']
      ? [...R, ...T]
      : Fill1<Rest, N, C1['length'], End, [...C, 1], [...C1, 1], [...R, N]>
    : Fill1<Rest, N, Start, End, [...C, 1], [...C1, 1], [...R, F]>
  : R
// ? End extends C['length']
//   ? [...R, N, ...Rest]
//   : Start extends C['length']
//   ? Fill1<Rest, N, C1['length'], End, [...C, 1], [...C1, 1], [...R, N]>
//   : Fill1<Rest, N, Start, End, [...C, 1], [...C1, 1], [...R, F]>
// : R
// ? End extends C['length']
//   ? [...R, N, ...Rest]
//     ?  Start extends C['length']
//     : Fill1<Rest, N, C1['length'], End, [...C, 1], [...C1, 1], [...R, N]>
//   : Fill1<Rest, N, Start, End, [...C, 1], [...C1, 1], R>
// : R

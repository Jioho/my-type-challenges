type Fill<T extends unknown[], N, Start extends number = 0, End extends number = T['length'], A extends unknown[] = [], F = false> = T extends [infer First, ...infer Rest]
  ? End extends A['length']
    ? T
    : Start extends A['length']
    ? [N, ...Fill<Rest, N, Start, End, [unknown, ...A], true>]
    : [F extends true ? N : First, ...Fill<Rest, N, Start, End, [unknown, ...A], F>]
  : T

// 方案1，会报错
// type Fill<T extends unknown[], N, Start extends number = 0, End extends number = T['length'], R extends unknown[] = []> = T extends [infer F, ...infer Rest]
//   ? R['length'] extends Start
//     ? R['length'] extends End
//       ? [...R, ...T]
//       : Fill<Rest, N, R['length'], End, [...R, N]>
//     : Fill<Rest, N, R['length'], End, [...R, F]>
//   : R

// T extends [infer F, ...infer Rest] ?
// R['length'] extends Start ?
// R['length'] extends End ?
// Fill<Rest, N, Start, End, [...R, F]> :
// Fill<Rest, N, [...R, N]['length'], [...R, N]> : []

// 拿临时变量出来，如果length == start 并且 length 不等于 结束的话，指定位置R push N，start = R.length
// length == start 并且 等于结束，那还是拿当前/直接T push进去
// length ！== start T push进去

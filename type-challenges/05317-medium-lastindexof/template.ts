// type LastIndexOf<T, U, C extends 1[] = [], L extends number = -1> = T extends [infer F, ...infer Rest]
//   ? U extends F
//     ? Rest extends []
//       ? L
//       : LastIndexOf<Rest, U, [...C, 1], C['length']>
//     : LastIndexOf<Rest, U, [...C, 1], L>
//   : L

import { Equal } from '@type-challenges/utils'

export type LastIndexOf<T, U, C extends 1[] = [], L extends number = -1> = T extends [infer F, ...infer Rest]
  ? Equal<U, F> extends true
    ? LastIndexOf<Rest, U, [...C, 1], C['length']>
    : LastIndexOf<Rest, U, [...C, 1], L>
  : L

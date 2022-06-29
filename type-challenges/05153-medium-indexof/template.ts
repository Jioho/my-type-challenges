import { Equal } from '@type-challenges/utils'

// 重点，使用equal的示例
export type IndexOf1<T extends unknown[], U, C extends 1[] = [], L extends number = -1> = T extends [infer F, ...infer Rest]
  ? Equal<F, U> extends true
    ? C['length']
    : IndexOf1<Rest, U, [...C, 1], L>
  : L

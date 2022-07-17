// type TwoSum<T extends number[], U extends number, Sum extends unknown[] = []> = T extends [infer F, ...infer Rest]
//   ? TwoSum<Rest & number[], U, [...Sum, ...CountToT<`${F & string}`>]>
//   : U extends Sum['length']
//   ? true
//   : false

import Includes from '../00898-easy-includes/template'

// 重点，也是减法的用法，加上 Inlucdes 的加持

export type TwoSum<T extends number[], U extends number> = T extends [infer F, ...infer Rest]
  ? Includes<Rest, Minus<U, F & number>> extends true
    ? true
    : TwoSum<Rest extends number[] ? Rest : [], U>
  : false

// export type TwoSum<T extends number[], U extends number> = T extends [infer F, ...infer Rest]
//   ? Includes<Rest, Minus<U, F & number>> extends true
//     ? true
//     : TwoSum<Rest & number[], U>
//   : false

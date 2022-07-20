// 解法1，插入排序
type Sort<A extends number[] = [], Desc extends boolean = false, R extends number[] = []> = A extends [infer F, ...infer Rest]
  ? Sort<Rest extends number[] ? Rest : [], Desc, InsertSort<F & number, R>>
  : Desc extends true
  ? Reverse<R>
  : R

type InsertSort<N extends number, Arr extends number[] = [], R extends unknown[] = []> = Arr extends [infer F, ...infer Rest]
  ? ArrayMoreThan<CountToT<`${F & number}`>, CountToT<`${N}`>> extends true
    ? [...R, N, F, ...Rest]
    : InsertSort<N, Rest extends number[] ? Rest : [], [...R, F]>
  : [...R, N]

type testInsertSort = InsertSort<3, [1, 2]>

// 额外挑战，允许15位数
// 允许浮点数
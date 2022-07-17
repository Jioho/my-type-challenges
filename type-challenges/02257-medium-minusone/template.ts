// type MinzusOne1<T extends number, C extends 1[] = [], N extends 1[] = [1]> = T extends N['length'] ? C['length'] : MinusOne1<T, [...C, 1], [...N, 1]>

type MinusOne1<T extends number> = CountToT<`${T}`> extends [...infer M1, 1] ? M1['length'] : 0

type Minus<T extends number | string, M extends number | string, TA extends 1[] = CountToT<`${T}`>,MA extends 1[] = CountToT<`${M}`>> =
  TA extends [...infer M1, ...MA] ? M1['length'] : MA extends [...infer M2,...TA] ? `-${M2['length']}` : 0


// 重点 用于生成数组，避免死循环！
// 核心，先算出了10位的，在拼个位，以此类推  比如 15 传入后，1 先被计算，得到 [1] 然后在计算5，第二次传入的时候1就会被 [...T*10]放大10倍
// 相对来说，千位数对百位数升级，也是放大10倍，非常秒！！
type CountToT<T extends string , Count extends 1[] = []> = T extends `${infer First}${infer Rest}` ? CountToT<Rest, N<Count>[keyof N & First]> : Count

type N<T extends 1[] = []> = {
  '0': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T]
  '1': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1]
  '2': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1]
  '3': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1]
  '4': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1, 1]
  '5': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1, 1, 1]
  '6': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1, 1, 1, 1]
  '7': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1, 1, 1, 1, 1]
  '8': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1, 1, 1, 1, 1, 1]
  '9': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1, 1, 1, 1, 1, 1, 1]
}

type testCountToT = CountToT<'15'>
type testN = N<[1, 1, 1, 1, 1]>[1]
type testn1 = keyof N & 2

type testMinus = Minus<100, 80>

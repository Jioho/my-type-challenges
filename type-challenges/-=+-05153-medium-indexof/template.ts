// 注意： 1 extends number 为true  number extend 1 为false，所以必须使用 u extend F

// any 如何判断？
// (<V>() => V extends First ? 1 : 0) extends <V>() => V extends U ? 1 : 0 ？ 什么写法
type IndexOf<T extends unknown[], U extends unknown, Count extends 1[] = []> = T extends [infer First, ...infer Rest]
  ? (<V>() => V extends First ? 1 : 0) extends <V>() => V extends U ? 1 : 0
    ? Count['length']
    : IndexOf<Rest, U, [...Count, 1]>
  : -1

// type IndexOf<T extends unknown[], U, I extends unknown[] = []> = T extends []
//   ? -1
//   : T extends [infer F, ...infer Rest]
//   ? U extends F
//     ? I['length']
//     : IndexOf<Rest, U, [...I, 1]>
//   : I['length']

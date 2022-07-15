// 何为 Tuple ？

// https://github.com/type-challenges/type-challenges/issues/10191
// 重点，详细答案
// your answers
type UnionToIntersectionFn<U> = (U extends unknown ? (k: () => U) => void : never) extends (k: infer I) => void ? I : never

type GetUnionLast<U> = UnionToIntersectionFn<U> extends () => infer I ? I : never

type Prepend<Tuple extends unknown[], First> = [First, ...Tuple]

type UnionToTuple<Union, T extends unknown[] = [], Last = GetUnionLast<Union>> = [Union] extends [never] ? T : UnionToTuple<Exclude<Union, Last>, Prepend<T, Last>>

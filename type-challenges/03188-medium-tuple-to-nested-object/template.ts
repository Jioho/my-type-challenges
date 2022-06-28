// 重点  [K in F]

type TupleToNestedObject1<T, U> = T extends [infer F extends string, ...infer Rest] ? { [K in F]: TupleToNestedObject1<Rest, U> } : U

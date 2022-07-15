
// 重点， UnionToTuple 还是很有用的  AppendToObject 也要重点讲讲
type ObjectFromEntries<T, U extends any[] = UnionToTuple<T>, R extends any = {}> = U extends [infer F, ...infer Rest]
  ? F extends [infer K, infer V]
    ? ObjectFromEntries<T, Rest, AppendToObject<R, K & string, V>>
    : ObjectFromEntries<T, Rest, R>
  : R

// 剩下date类型报错？
// 双向判断
type MapTypes<T, R extends { mapFrom: unknown; mapTo: unknown }> = {
  [P in keyof T]: T[P] extends R['mapFrom'] ? (R extends { mapFrom: T[P]; mapTo: unknown } ? R['mapTo'] : never) : T[P]
}

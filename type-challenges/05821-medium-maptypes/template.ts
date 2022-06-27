// 重点，和equal对比
type MapTypes1<T, R extends { mapFrom: unknown; mapTo: unknown }> = {
  [P in keyof T]: T[P] extends R['mapFrom'] ? (R extends { mapFrom: T[P]; mapTo: unknown } ? R['mapTo'] : never) : T[P]
}

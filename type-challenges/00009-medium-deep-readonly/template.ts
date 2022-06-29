// 重点  可以用keyof 来判断是不是可遍历类型
// 可遍历的就可以加readonly

type DeepReadonly1<T> = {
  readonly [P in keyof T]: keyof T[P] extends T[P] ? T[P] : DeepReadonly1<T[P]>
}

// 重点 P in keyof T 是一组， as  any extends P 是为了创造条件
// 最后黄算下来是 P in keyof T as P 的意思！

type PickByType1<T, U> = {
  [P in keyof T as any extends P ? never : T[P] extends U ? P : never]: T[P]
}

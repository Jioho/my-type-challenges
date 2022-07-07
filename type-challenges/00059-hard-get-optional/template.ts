// 困难重点 和 57的一样
type GetOptional<T, P = Partial<T>> = {
  [K in keyof T as P extends Pick<T, K> ? K : never]: T[K]
}

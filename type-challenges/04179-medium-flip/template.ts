// 重点，考察TP循环， & 符的用法
// keyof any 的用法
// TP 类型限制为 string number ，还要把他们转换为string
type Flip1<T> = {
  [P in keyof T as T[P] extends keyof any ? T[P] : `${T[P] & (bigint | boolean | null | undefined)}`]: P
}
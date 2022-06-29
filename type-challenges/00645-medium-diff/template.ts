// 重点，考察omit用法
// & 符号在这里没用

type Diff1<O, O1> = {
  [P in keyof Omit<O, keyof O1> | keyof Omit<O1, keyof O>]: P extends keyof O ? O[P] : P extends keyof O1 ? O1[P] : never
}

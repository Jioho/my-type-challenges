// 顺便研究下 MyOmit 为什么不行

type Diff<O, O1> = {
  [P in keyof Omit<O, keyof O1> | keyof Omit<O1, keyof O>]: P extends keyof O ? O[P] : P extends keyof O1 ? O1[P] : never
}

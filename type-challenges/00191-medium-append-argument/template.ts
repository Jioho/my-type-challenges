// 重点 函数判断的使用把args复制 给一个数组变量。x的名称其实不重要
type AppendArgument1<Fn, A> = Fn extends (..._: infer P) => infer R ? (...arg0: [...P, A]) => R : Fn

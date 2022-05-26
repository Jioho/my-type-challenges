type AppendArgument<Fn, A> = Fn extends (...args: infer P) => infer R ? (...args: [...P, A]) => R : never

type FlipArguments1<T> = T extends (..._: infer args) => infer R ? (...arg0: Reverse<args>) => R : T

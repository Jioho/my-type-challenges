type FlipArguments1<T> = T extends (...infer: infer args) => infer R ? (..._: Reverse<args>) => R : T

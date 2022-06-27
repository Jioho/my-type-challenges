type FlipArguments<T> = T extends (..._: infer A) => infer R ? (..._: Reverse<A>) => R : T

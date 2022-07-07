declare function Currying<T>(fn: T): CurryingFn<T>

type CurryingFn<T> = T extends (...args: infer Args) => infer Result
  ? Args extends [infer First, ...infer Rest]
    ? (_: First) => CurryingFn<(..._: Rest) => Result>
    : Result
  : never

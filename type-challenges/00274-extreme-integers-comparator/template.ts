enum Comparison {
  Greater,
  Equal,
  Lower
}

type Comparator<A extends number, B extends number> = `${A}` extends Absolute<A>
  ? `${B}` extends Absolute<`${B}`>
    ? MoreThan<A, B>
    : Comparison.Greater
  : `${B}` extends Absolute<`${B}`>
  ? Comparison.Lower
  : MoreThan<Absolute<`${B}`>, Absolute<`${A}`>>

type MoreThan<A extends number | string, B extends number | string> = Minus<A, B> extends 0 ? Comparison.Equal : Minus<A, B> extends string ? Comparison.Lower : Comparison.Greater

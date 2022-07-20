type InclusiveRange<
  Lower extends number,
  Higher extends number,
  LArray extends 1[] = CountToT<`${Lower}`>,
  HigherArray extends 1[] = CountToT<`${Higher}`>,
  R extends number[] = []
> = ArrayMoreThan<LArray, HigherArray> extends true ? R : InclusiveRange<Lower, Higher, [...LArray, 1], HigherArray, [...R, LArray['length']]>

type ArrayMoreThan<A extends 1[] = [], B extends 1[] = []> = A extends [...B, ...infer Rest] ? (Rest extends [] ? false : true) : false

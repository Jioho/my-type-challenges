type Slice<
  Arr extends unknown[],
  Start extends number = 0,
  End extends number = Arr['length'],
  C extends 1[] = [],
  R extends unknown[] = [],
  Flag extends boolean = false
> = Arr extends [infer F, ...infer Rest]
  ? RealIndex<[...Arr, ...C], End> extends C['length']
    ? R
    : C['length'] extends RealIndex<[...Arr, ...C], Start>
    ? Slice<Rest, Start, End, [...C, 1], [...R, F], true>
    : Flag extends true
    ? Slice<Rest, Start, End, [...C, 1], [...R, F], true>
    : Slice<Rest, Start, End, [...C, 1], R, false>
  : R

type RealIndex<Arr extends unknown[] = [], I extends number = 0> = `${I}` extends Absolute<I>
  ? I
  : Minus<Arr['length'], Absolute<I>> extends string
  ? 0
  : Minus<Arr['length'], Absolute<I>>

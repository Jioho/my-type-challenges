// type NumberRange<L, H, C extends 1[] = [], R extends unknown[] = []> = L extends C['length']
//   ? H extends C['length']
//     ? '这里'
//     : NumberRange<C['length'], H, [...C, 1], [...R, L]>
//   : NumberRange<L, H, [...C, 1], R>

type NumberRange<L, H, C extends 1[] = [], N extends 1[] = [1], R extends unknown[] = []> = C['length'] extends L
  ? C['length'] extends H
    ? R[number] | H
    : NumberRange<N['length'], H, [...C, 1], [...N, 1], [...R, L]>
  : NumberRange<L, H, [...C, 1], [...N, 1], R>

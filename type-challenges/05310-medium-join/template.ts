type Join<T extends unknown[], U extends string | number, R extends string = ''> =
  T extends [infer F extends string | number, ...infer Rest] ? Join<Rest, U, `${R extends '' ? R : `${R}${U}`}${F}`> : R

type PercentageParser1<A extends string, U extends [string, string, string] = ['', '', '']> = `${A}` extends `${infer F}${infer Rest}`
  ? F extends '+' | '-'
    ? PercentageParser1<Rest, [F, U[1], U[2]]>
    : F extends '%'
    ? [U[0], U[1], F]
    : PercentageParser1<Rest, [U[0], `${U[1]}${F}`, U[2]]>
  : U

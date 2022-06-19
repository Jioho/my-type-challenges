// ${infer P extends ('%' | '')}
// type PercentageParser<A extends string> = A extends `${infer F extends ('+' | '-' | '')}${infer P}` ? P extends `${infer N}${infer S extends '%' | ''}` ? [F,N,S]  :[F, P,''] : ['', '', '']
type PercentageParser<A extends string, R extends [string, string, string] = ['', '', '']> = A extends `${infer F}${infer Rest}`
  ? F extends '+' | '-'
    ? PercentageParser<Rest, [F, '', '']>
    : F extends `${number}`
    ? PercentageParser<Rest, [R[0], `${R[1]}${F}`, '']>
    : F extends '%'
    ? PercentageParser<Rest, [R[0], R[1], F]>
    : R
  : R

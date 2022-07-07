type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

// 重点 这里用这种不行，原因和112一样， | 会自动解构的
// type ParsePrintFormat<S extends string> = S extends `${infer F}%${keyof ControlsMap}${infer Rest}`
//   ? S extends `${F}%${infer M}${Rest}`
//     ? M // [ControlsMap[M & keyof ControlsMap],...ParsePrintFormat<Rest>]
//     : []
//   : []

// 还得看逐字排插
type ParsePrintFormat<S extends string, R extends string[] = []> = S extends `${infer F}%${infer C}${infer Rest}`
  ? C extends keyof ControlsMap
    ? ParsePrintFormat<Rest, [...R, ControlsMap[C]]>
    : ParsePrintFormat<Rest, R>
  : R

type testParsePrintFormat = ParsePrintFormat<'Hello %s: score is %d.'>

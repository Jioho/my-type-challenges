type DropString<S, R, P extends string = ''> = S extends `${infer F}${infer Rest}`
  ? R extends `${infer F1}${F}${infer F2}`
    ? DropString<Rest, R, P>
    : DropString<Rest, R, `${P}${F}`>
  : P

type testDropString = DropString<'butter fly!', ''>

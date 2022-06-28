// 重点，这里可以看看原版的，直接判断 - ，排除掉即可，不用那么麻烦
// 否则还得考虑 _ 的情况，因为其实 _ 也是在数字了！

type numberStr = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type Absolute1<T extends number | string | bigint, R extends string = ''> = `${T}` extends ''
  ? R
  : `${T}` extends `${infer F}${infer Rest}`
  ? Absolute1<Rest, F extends numberStr ? `${R}${F}` : R>
  : never

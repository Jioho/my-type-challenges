// type Split<S extends string, SEP extends string, W extends string = '', R extends string[] = []> = S extends `${infer F}${infer Rest}`
//   ? F extends SEP
//     ? Split<Rest, SEP, '', [...R, SEP extends '' ? F : W]>
//     : Split<Rest, SEP, `${W}${F}`, R>
//   : W extends ''
//   ? R
//   : [...R, W]

// 我的答案
// type Split<S extends string, SEP extends string, W extends string = '', R extends string[] = []> = string extends S
//   ? string[]
//   : S extends `${infer F}${infer Rest}`
//   ? SEP extends ''
//     ? Split<Rest, SEP, '', [...R, F]>
//     : F extends SEP
//     ? Split<Rest, SEP, '', [...R, W]>
//     : Split<Rest, SEP, `${W}${F}`, R>
//   : W extends ''
//   ? R
//   : [...R, W]

// github 答案  纯粹想复杂了。S extends SEP 没考虑进去
// 重点 !! infer 字符串用法，根本不用单独起个W
type Split<S extends string, SEP extends string, Res extends string[] = []> = string extends S
  ? string[]
  : S extends SEP
  ? Res
  : S extends `${infer First}${SEP}${infer Last}`
  ? Split<Last, SEP, [...Res, First]>
  : [...Res, S]

type testSplit = Split<'', 'z'>

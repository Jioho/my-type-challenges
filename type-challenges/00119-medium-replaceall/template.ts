// 解法1
type ReplaceAll<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer T1}${From}${infer T2}`
  ? `${T1}${To}${ReplaceAll<T2, From, To>}`
  : S

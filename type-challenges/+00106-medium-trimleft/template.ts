/**
 * 1.
 * type TrimLeft<S extends string> = keyof S extends [infer F, ...infer R] ? (F extends ' ' ? TrimLeft<typeof R> : S) : never
 *   报错 'R' only refers to a type, but is being used as a value
 *
 * 这里不能用数组的思想，思路是对了，方法用错
 */

type TirmChart = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${TirmChart}${infer R}` ? TrimLeft<R> : S

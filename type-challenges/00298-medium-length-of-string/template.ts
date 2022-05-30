/**
 * 1. 使用 S['length']  返回类型是 number，需要返回具体的数值
 *
 * 正确还是使用递归和infer 拆成数组，在使用。length
 */

type LengthOfString<S extends string, Arr extends unknown[]> = S extends `${infer F}${infer R}` ? LengthOfString<R, [F, ...Arr]> : Arr['length']

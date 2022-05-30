/**
 * 知识点
 *  1. 转换为小写： Lowercase
 * 2. 判断是否大写 Uppercase
 */

type KebabCase<S extends string, L extends string = ''> = S extends `${infer F}${infer Rest}`
  ? F extends Lowercase<F>
    ? KebabCase<Rest, `${L}${F}`>
    : L extends ''
    ? KebabCase<Rest, Lowercase<F>>
    : KebabCase<Rest, `${L}-${Lowercase<F>}`>
  : L

type test = KebabCase<'L'>

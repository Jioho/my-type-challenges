/**
 * 1. U extends T[number] ? true : false
 *  错误： 1.1 { a: 'A' } extends {} 时也为true，测试用例不过
 * 
 * 2. 改成递归版本后，因为引入到了外部的 Equal。所以 Includes 变成是一个模块的，不是全局的，所以测试用例都爆粗了
 */

import { Equal } from '@type-challenges/utils'

type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest] ? (Equal<First, U> extends true ? true : Includes<Rest, U>) : false

export default Includes

/**
 * 常规实现方案
 * @param T
 * @param U
 * @returns
 */
function include(T: any[], U: any) {
  for (let i = 0; i < T.length; i++) {
    const t = T[i]
    if (t === U) {
      return true
    }
  }
  return false
}

/**
 * 递归版
 */
function include2(T: any[], U: any): Boolean {
  function _(T: any[], U: any): Boolean {
    let [first, ...rest] = T
    if (first === U) {
      return true
    } else {
      return include2(rest, U)
    }
  }
  return _(T, U)
}

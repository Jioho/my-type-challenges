/**
 * 什么是 tulpe 类型
 *  - 相当于类数组的概念
 * tuple 和 数组的区别
 *  - tuple 是定长的一个类型数组
 *  - 数组的 length 是 never
 */

/**
 * 1. type Length<T extends []> = T['length']  test 报错
 *   The type 'readonly ["tesla", "model 3", "model X", "model Y"]' is 'readonly' and cannot be assigned to the mutable type '[]'
 *
 * 因为 tuple 是 readonly 的数组类型，而且下面直接用了 []
 * 
 * 所以要改成:
 */
type Length<T extends readonly any[]> = T['length']

function mtLength(arr: string[]) {
  if (!Array.isArray(arr)) {
    return 0
  }
  return arr.length
}

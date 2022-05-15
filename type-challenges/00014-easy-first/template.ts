/**
 * 1. 读取第0项内容
 * 2. 返回第0项内容
 * 3. 如果第0项不存在，那么返回 nerver
 */

/**
 * 1. T[0] ? T[0] : never 报错，不能用  ？
 * 2. number extends 0 ? T[0] : never 报错，因为循环下去都是nerver
 *
 * 解法1： T extends { length: 0 } ? never : T[0]
 * 解法2： T extends [] ? never : T[0]  直接判断数组是不是空数组 T extends [] ? never : T[0]
 * 解法3： T['length'] extends 0 ? never : T[0]
 * 解法4:  T[0] extends T[number] ? T[0] : never； 空数组的 T[0] -> 返回的是 never，而js 返回的则是 undefined
 * 解法5： T extends [infer F,...infer Rest] ? F : never; infer 是遍历里面的值，这里的意思就是说能不能解构出来一个F的值，可以的话返回F
 */
type First<T extends any[]> = T extends [infer F, ...infer Rest] ? F : never

type myFirsr = First<[]>

function first(arr: any[]) {
  // 判断 arr 是否一个空数组
  return arr[0]
}

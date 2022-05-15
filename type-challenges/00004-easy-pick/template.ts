/**
 * 1. 返回一个对象
 * 2. 遍历keys 获取 key
 *  - ts 用法 in , 文档关键词 Mapped Types
 *  - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
 * 3. 判断key是否在 obj 里面
 *  - ts 用法 extentds  文档关键词  indexed
 *  - https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content
 * 4. 获取 obj[key] 的值
 */

/**
 * 1. [P in K]: T[P] Type 'P' cannot be used to index type 'T'.
 *  P 可能不在 T里面，所以需要从K开始就判断 K 全部存在 T里面
 * 2. K extends keyof T
 *  T 是个对象，要拿到对应的 union 类型进行判断
 */
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// 类比学习
function myPick(todo: { [x: string]: any }, keys: any[]) {
  const obj: any = {}
  keys.forEach(key => {
    if (todo[key]) {
      obj[key] = todo[key]
    }
  })
  return obj
}

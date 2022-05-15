/**
 * 1. 遍历 obj 对象，拿到 key
 * 2. 获取 obj[key]
 * 3. 添加readonly 关键字
 * 4. 返回对象
 */

/**
 * 1. readonly [P in T]: T[P] 报错 Type 'T' is not assignable to type 'string | number | symbol'.
 *   因为T还是对象类型，不是unio类型，所以还需要 keyof
 */
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

type obj = { [name: string]: any }
function myReadonly(obj: obj) {
  const result: obj = {}
  for (const key in obj) {
    result['readonly' + key] = obj[key]
  }
  return result
}

console.log(
  myReadonly({
    name: 'Jioho',
    age: '20'
  })
)

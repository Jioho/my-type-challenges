/**
 * 1. 遍历传入的元组
 * 2. 生成对应的key和value
 * 3. 返回个对象
 * 
 * --- 
 * 
 * 额外知识点
 * 1. typeof 就是把 js 世界的东西转换为  ts
 * 2. as const 就是把对应的数组，转换为字面量的东西
 */

/**
 * 1. [P in T]: T[number] 报错
 *    Type 'T' is not assignable to type 'string | number | symbol'. Type 'readonly any[]' is not assignable to type 'string | number | symbol'.
 * 因为这个不是类型，而是真实的数组
 * 
 * 2. 循环数组使用 T[number] 或者 keyof T
 *  其中 keyof T 得到的是数组的索引
 * 
 * 3. [P in T[number]]: T[number] 在测试用例没通过
 *  因为值后面还是走了循环。而 P 才是对应的当前的那一项
 */
type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple>

function tupleToObject(arr: any[]) {
  const result: { [name: string]: string } = {}
  arr.forEach(item => {
    result[item] = item
  })
  return result
}

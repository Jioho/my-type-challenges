// 重点，链式调用的规则
// 1. option 肯定是返回当前对象的，所以肯定是返回 Chainable1
// 2. 不能直接在这用typeof
// 3. 使用循环的时候，记得要用 in ，不一定要带keyof，看情况使用keyof
type Chainable1<T = {}> = {
  option<K extends string, V extends any>(key: K, value: V): Chainable1<T & { [k in K]: V }>
  get(): T
}

// type Chainable1true<T = {}> = {
//   option<K extends string, V extends any>(key: K, value: V): Chainable1<AppendToObject<T, K, V>>
//   get(): T
// }

// 错误示范，不能直接在这里用typeof
type Chainable12<T = {}> = {
  option(key: string, value: any): Chainable12<AppendToObject<T, typeof key, typeof value>>
  get(): T
}

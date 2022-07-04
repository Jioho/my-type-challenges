// 重点
// 和012一样，需要自定义泛型T
// declare function PromiseAll1<T extends []>(values): Promise<values>
// 注意用上了解构赋值，
declare function PromiseAll1<T extends any[]>(values: readonly [...T]): Promise<{ [P in keyof T]: T[P] extends Promise<infer R> ? R : T[P] }>

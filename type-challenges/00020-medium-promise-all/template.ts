// 重点
// 和012一样，需要自定义泛型T
// declare function PromiseAll1<T extends []>(values): Promise<values>
// 注意用上了解构赋值，
// declare function PromiseAll1<T extends any[]>(values: readonly [...T]): Promise<{ [P in keyof T]: T[P] extends Promise<infer R> ? R : T[P] }>

// declare function PromiseAll1<T extends any[]>(values: readonly [...T]): Promise<{ [P in keyof T]: T[P] extends Promise<infer R> ? R : T[P] }>

declare function PromiseAll1<T extends any[]>(values: readonly [...T]): Promise<PromiseRes<T>>

declare function PromiseAll1<T extends any[]>(values: readonly [...T]): Promise<PromiseRes<T>>

// type PromiseRes<T extends any[], R extends any[] = []> = T extends [infer F, ...infer Rest] ? PromiseRes<Rest, [...R, F extends Promise<infer A> ? A : F]> : R
type PromiseRes<T extends any[]> = keyof T

type TestPromiseRes = PromiseRes<[1, 2, number]>

var arr: TestPromiseRes = [1, 2, 3]

type linkArr = {
  0: 'Jioho'
  1: 'Promise'
}

type Arr = ['Jioho', 'Promise']

type IsArray = Pick<linkArr, 0 | 1>

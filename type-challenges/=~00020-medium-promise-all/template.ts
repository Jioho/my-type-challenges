/**
 * 1. declare function PromiseAll(values: any): Promise<typeof values>
 *
 *  这时候返回的是 Promise<any>
 * 
 * 2. declare function PromiseAll(values: unknown[]): typeof values
 *  返回了 unknown[]
 */

/**
 * 标准答案
 * declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{[P in keyof T] : T[P] extends Promise<infer R>? R : T[P]}>
 * 
 * 1. 先定义泛型T，其中T肯定是数组类型
 * 2. 在定义 values 的时候，我定义的是 unknown，答案是 readonly [...T]，因为在函数部分还不能使用 infer，使用T代替整个数组
 * 3. 返回值是Promise，然后也是个泛型 所以是 Promise<>
 * 4. 循环判断TP还是不是promise对象，如果是的话，这时候就能用 infer了
 */

declare function PromiseAll<T>(values: unknown[]): Promise(values:T extends infer P)

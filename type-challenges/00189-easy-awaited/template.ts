/**
 * 1. type MyAwaited<T> = T extends Promise<U> ? MyAwaited<U> : T
 *   U name 不存在
 *
 * 2. type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T
 *   需要用 infer 把 value 提出来，可能还有Promise包裹，所以还要继续判断
 *
 * 2 已经对了一半，可是还没兼容一开始传入就不是 Promise 的状态，所以一开始也要约束他为 Promise，其中类型是不知道的，所以是 unknown
 *  T extends Promise<unknown> 后，递归的U就会开始报错，因为U不确定是不是Promise，所以三目运算符中还得对U再来一次判断
 */

type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U> ? (U extends Promise<unknown> ? MyAwaited<U> : U) : T

/**
 * 1. <T extends Function> = T extends () => infer Return ? Return : T
 * 这样推导出来的不符合返回值是 1 | 2 的情况
 *
 * 2. 其实是因为类型方法没匹配对，没有把有参数的情况列进来
 */

type MyReturnType<T> = T extends (...args: infer P) => infer Return ? Return : never

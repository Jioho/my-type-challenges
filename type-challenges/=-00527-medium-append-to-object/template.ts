/**
 * 1. type AppendToObject<T, U, V> = { [P in keyof T]: T[P] } & { [keyof U]: V }
 *   报错 U 不是一个类型
 * 
 * 
 * 解决，使用 | 来循环上U
 */

type AppendToObject<T, U extends string, V> = {
  [P in keyof T | U]: P extends keyof T ? T[P] : V
}

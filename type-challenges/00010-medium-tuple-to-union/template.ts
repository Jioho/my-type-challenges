/**
 * 1. type TupleToUnion<T> = T extends unknown[] ? T[number] : never
 * 正确，因为读取了全部元素
 * 
 * 2. type TupleToUnion<T> = T extends Array<infer K> ? K : never
 *  可以利用 infer 和 Array 的泛型
 */

type TupleToUnion<T> = T extends unknown[] ? T[number] : never

/**
 * 思路1， 用了2个变量
 */

type Flatten<T extends unknown[], R extends unknown[] = []> = T extends [infer P, ...infer O] ? (P extends unknown[] ? Flatten<[...P, ...O], R> : Flatten<O, [...R, P]>) : R

/**
 * 思路2 用一个变量，不过用拓展运算符解出来
 */

type Flatten2<T extends Array<unknown>> = T extends [infer F, ...infer Rest] ? (F extends Array<unknown> ? [...Flatten<F>, ...Flatten<Rest>] : [F, ...Flatten<Rest>]) : []

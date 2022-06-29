/**
 * 1. K 不能判断是underfind 或者never  所以就算直接返回Readonly 也不行
 *
 * 2. K 能给默认值，和普通的方法一样，给个T
 *  得 <T, K = T>
 *
 * 3. 日常extends(extends 写法不清楚)
 *
 * 4.  readonly [P in keyof K]: K[P] 这样只能把readonly部分处理好
 *
 * 总结 K extends keyof T = keyof T 写法容易错的地方
 *  K extends keyof T = T  这里直接报错，因为类型就不对了
 *
 * 技巧点2：
 *  as 在P1 in keyof 后，还需要判断是否在T里面，因为同名的使用 & 会变成 never
 */

type MyReadonly2<T, K extends keyof T = keyof T> = { [P1 in keyof T as P1 extends K ? never : P1]: T[P1] } & { readonly [P in K]: T[P] }

type type1 = {
  title: string
}

type type2 = {
  title: number
}

type type3 = type1 & type2

// const a: type3 = {
//   title: false
// }

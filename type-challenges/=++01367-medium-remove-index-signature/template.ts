// 1.
// type RemoveIndexSignature<T> = {
//   [P in keyof T]: P
// }

// 打印出来的区别就是 P 一个是 string，一个是确切的字符串

// 问题关键： 区分类型和普通字符串

// 区分字符串和类型：
type teststring = string extends `${string}${string}` ? true : false
type teststring2 = '1' extends `${1}${1}` ? true : false
// type RemoveIndexSignature<T> = {
//   [P in keyof T]: P extends string ? (P extends `${P}${P}` ? never : T[P]) : T[P]
// }

// never 问题  还是需要从 [ 就开始解决]

// type keyType = number | string | symbol
// [P in keyof T as keyType extends P ? never : P]: T[P]   这种不行，多无法对1

type RemoveIndexSignature<T> = {
  [P in keyof T as string extends P ? never : number extends P ? never : symbol extends P ? never : P]: T[P]
}

// 重点 比较特别的思路

// 1. 全部转小写
// 2. 根据infer的特性，直接找出 _ 后面的字母，然后递归判断

type CamelCase<S extends string, L extends string = Lowercase<S>> = L extends `${infer F}_${infer B}${infer Rest}` ? `${F}${Uppercase<B>}${CamelCase<Rest>}` : L

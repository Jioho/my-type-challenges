// 也是union的特性，自动解构循环

type Permutation<T, U = T> = [U] extends [never] ? [] : U extends T ? [U, ...Permutation<Exclude<T, U>>] : []

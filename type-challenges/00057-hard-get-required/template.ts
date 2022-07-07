type GetUnionKeys<T> = {
  [P in keyof T]: P
}

// 正确答案1
// type GetRequired<T, U = GetUnionKeys<T>> = {
//   [P in keyof U as undefined extends U[P] ? never : P]: P extends keyof T ? T[P] : never
// }

// 也能使用 extends的技巧，? 的 不extends 没 ? 的
type GetRequired<T, P = Partial<T>> = { [K in keyof T as P extends Pick<T, K> ? never : K]: T[K] }

// P extends { bar?: string } ? true : false
//

// 困难 重点，解题技巧
// type testGetRqui = {
//   foo: "foo";
//   bar?: "bar" | undefined;
// }

// P extends Pick<T, K> 因为都是非必填的，所以这里的 extends 可以排除掉了其他的键值
type testGetRqui = GetRequired<{ foo: number; bar?: string }>

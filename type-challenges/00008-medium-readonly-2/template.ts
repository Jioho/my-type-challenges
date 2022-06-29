// 同 0003 和 2595 一样

// type MyReadonly21<T, K = keyof T> = {
//   readonly [P in keyof T as any extends P ? never : P extends K ? P : never]: T[P]
// } & {
//   -readonly [P in keyof T as any extends P ? never : P extends K ? never : P]: T[P]
//   }

type MyReadonly21<T, K extends keyof T = keyof T> = { [P1 in keyof T as P1 extends K ? never : P1]: T[P1] } & { readonly [P in K]: T[P] }

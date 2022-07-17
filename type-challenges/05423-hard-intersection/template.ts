// 重点 Extract 的使用

// 其实Extract也超级简单。。。
// /**
//  * Extract from T those types that are assignable to U
//  */
//  type Extract<T, U> = T extends U ? T : never;

type Intersection<T extends unknown[], R extends unknown = any> =
  T extends [infer F, ...infer Rest] ? Intersection<Rest, Extract<F extends unknown[] ? F[number] : F, R>> : R

// : T extends [infer F, infer S, ...infer Rest]
// ? Extract<Extract<F extends unknown[] ? F[number] : F, S extends unknown[] ? S[number] : S>, Intersection<[Rest]>>
// : never

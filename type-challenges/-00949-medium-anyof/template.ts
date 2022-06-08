// 1.
// type AnyOf<T extends readonly any[]> = T extends [infer P, ...infer Rest] ? (P extends true ? true : AnyOf<Rest>) : false
// 这时候 1 应该判定为 true

// 2.
// type AnyOf<T extends readonly any[]> = T extends [infer P, ...infer Rest] ? (P extends false ? AnyOf<Rest> : true) : false
// 这时候 {} 返回了true，应该判定为false

// 3. 研究下record的作用
// 做题，要扩散点思维，不要不想写或
type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer Rest] ? (F extends false | Record<string,never> | [] | '' | 0 | null ? AnyOf<Rest> : true) : false

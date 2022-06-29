// 重点，这种判断直接多选，而且了解record的用法
type AnyOf1<T extends readonly any[]> = T extends [infer F, ...infer Rest] ? (F extends false | Record<string, never> | [] | '' | 0 | null ? AnyOf<Rest> : true) : false

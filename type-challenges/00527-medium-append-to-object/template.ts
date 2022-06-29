// 重点，不能用 & 符，还是要从 【】 开始做文章

type AppendToObject1<T, U extends string, V> = { [P in keyof T | U]: P extends keyof T ? T[P] : V }

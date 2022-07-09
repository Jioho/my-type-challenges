// 重点 & 符的使用，证明是这个交集/直接强行拉一波

type Get<T, K> = K extends `${infer F}.${infer Rest}` ? Get<T[F & keyof T], Rest> : T[K & keyof T]

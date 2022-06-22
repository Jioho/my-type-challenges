// type ObjectEntries<T, K = keyof T> = K extends keyof T ? (K extends [string | number | symbol] ? never : [K, T[K]]) : never

// // Partial 让整个参数可选，因为string已有人选了，所以还额外补充了一个 number的可选类型
// type PartialModel = Partial<Model>
// type testobjentries = ObjectEntries<PartialModel>

type ObjectEntries<T, R = Required<T>, K = keyof R> = K extends keyof R ? [K, [R[K]] extends [never] ? undefined : R[K]] : never

type PartialModel = Partial<Model>
type RequirePartialModel = Required<PartialModel>

type testobjentries = ObjectEntries<PartialModel>

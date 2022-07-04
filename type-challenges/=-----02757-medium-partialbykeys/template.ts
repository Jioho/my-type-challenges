type Copy<T> = Pick<T, keyof T>

type PartialByKeys<T, K = keyof T> = Copy<Omit<T, K & keyof T> & Partial<Pick<T, K & keyof T>>>

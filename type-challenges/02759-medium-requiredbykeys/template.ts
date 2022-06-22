type RequiredByKeys<T, K = keyof T> = Copy<Omit<T, keyof T & K> & Required<Pick<T, keyof T & K>>>

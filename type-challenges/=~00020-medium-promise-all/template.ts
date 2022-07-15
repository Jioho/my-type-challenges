declare function PromiseAll<T>(values: readonly T[]): Promise<T>

declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{[P in keyof T] : T[P] extends Promise<infer R>? R : T[P]}>
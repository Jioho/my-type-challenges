type Shift<T extends unknown[]> = T extends [infer F, ...infer R] ? R : []

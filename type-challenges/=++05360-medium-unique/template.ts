// 结合indexof和equal来判断
type Unique<T extends unknown[], U extends unknown[] = []> = T extends [infer F, ...infer R] ? (IndexOf<U, F> extends -1 ? Unique<R, [...U, F]> : Unique<R, U>) : U

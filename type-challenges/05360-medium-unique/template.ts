type Unique1<T extends unknown[], U extends unknown[] = []> = T extends [infer F, ...infer Rest] ? (IndexOf<U, F> extends -1 ? Unique1<Rest, [...U, F]> : Unique1<Rest, U>) : U

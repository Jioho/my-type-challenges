type ParseQueryString<T extends string, R extends any = {}> = T extends '' ? R : T extends `${infer K}&${infer Rest}` ? ParseQueryString<Rest, ParseQuery<K, R>> : ParseQuery<T, R>

type ParseQuery<T extends string, R extends any = {}> = T extends `${infer K}=${infer V}` ? AppenData<R, K, V> : AppenData<R, T, true>

type AppenData<R extends any, K extends string, V extends unknown = true> = K extends keyof R
  ? R[K] extends V
    ? R
    : { [P in keyof R]: P extends K ? (R[P] extends unknown[] ? [...R[P], V] : [R[P], V]) : R[P] }
  : AppendToObject<R, K, V>

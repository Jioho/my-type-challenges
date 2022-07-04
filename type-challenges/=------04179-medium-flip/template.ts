type Flip<T> = {
  [K in keyof T as T[K] extends keyof any ? T[K] : `${T[K] & (bigint | boolean | null | undefined)}`]: K
}

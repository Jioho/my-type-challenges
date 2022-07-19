import { Equal } from '@type-challenges/utils'

export type GetReadonlyKeys<T> = keyof {
  [K in keyof T as Equal<Pick<T, K>, Readonly<Pick<T, K>>> extends true ? K : never]: K
}

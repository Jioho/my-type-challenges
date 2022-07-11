import { Equal } from '@type-challenges/utils'

export type MutableKeys<T, U = Readonly<T>> = keyof {
  [P in keyof T as P extends keyof U ? (Equal<Pick<U, P>, Pick<T, P>> extends true ? never : P) : never]: P
}


// 重点 注意readonly用法，还是要用equal
type testReadonly = {
  a: string
} extends {
  readonly a: string
}
  ? true
  : false

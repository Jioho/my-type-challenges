// 针对数组的单独处理

type CapitalizeNestObjectKeys<T> = T extends unknown[]
  ? CapitalizeArray<T>
  : T extends Record<string, unknown>
  ? {
      [K in keyof T as K extends string ? Capitalize<K> : never]: CapitalizeNestObjectKeys<T[K]>
    }
  : T

type CapitalizeArray<T extends unknown[], R extends unknown[] = []> = T extends [infer F, ...infer Rest] ? CapitalizeArray<Rest, [...R, CapitalizeNestObjectKeys<F>]> : R

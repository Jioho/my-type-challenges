// 重点 ，merge 的用法，Record的用法

type Assign<T extends Record<string, unknown>, U extends any[] = []> = U extends [infer F, ...infer R]
  ? F extends Record<string, unknown>
    ? Assign<Merge<T, F>, R>
    : Assign<T, R>
  : T

type testRecord = Record<string, unknown>

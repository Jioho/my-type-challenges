// 重点，也是考察数组的用法，关于10进制用10个 ...t.二进制则用2个就行

type BinaryToDecimal<S extends string, R extends 1[] = []> = S extends `${infer F}${infer Rest}` ? BinaryToDecimal<Rest, N2<R>[F & ('0' | '1')]> : R['length']

type N2<T extends 1[] = []> = {
  '0': [...T, ...T]
  '1': [...T, ...T, 1]
}

type testN2 = N2<[1]>[0]

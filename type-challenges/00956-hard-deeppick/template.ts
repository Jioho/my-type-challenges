type ExtractValuesOfTuple<T extends any[]> = T[keyof T & number]

// 重点 用到了 union 转数组
// 然后再从数组转回 union
// ExtractValuesOfTuple 用上了 0730题目里面的一个方法
type DeepPick<T, U, K = UnionToTuple<U>> = K extends [infer First, ...infer Rest]
  ? First extends `${infer FK}.${infer RK}`
    ? AppendToObject<{}, FK, DeepPick<T[FK & keyof T], RK>> & DeepPick<T, ExtractValuesOfTuple<Rest>>
    : First extends keyof T
    ? AppendToObject<{}, First & string, T[First & keyof T]> & DeepPick<T, ExtractValuesOfTuple<Rest>>
    : unknown
  : unknown

// https://github.com/type-challenges/type-challenges/issues/4043
// 重点 UnionToIntersection 技巧

type Obj = {
  a: number
  b: string
  c: boolean
  obj: {
    d: number
    e: string
    f: boolean
    obj2: {
      g: number
      h: string
      i: boolean
    }
  }
  obj3: {
    j: number
    k: string
    l: boolean
  }
}

type testDeepPick = DeepPick<Obj, 'a' | 'obj.e'>

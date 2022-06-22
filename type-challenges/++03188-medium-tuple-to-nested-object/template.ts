// 问题1， F 怎么作为一个变量的键值传进去
// type TupleToNestedObject<T extends unknown[], U> = T extends [infer F, ...infer R] ? { F: TupleToNestedObject<R, U> } : U

// 先确定F是string，然后用 in 
type TupleToNestedObject<T extends unknown[], U> = T extends [infer F extends string, ...infer R] ? { [K in F]: TupleToNestedObject<R, U> } : U

function TupleToNestedObject(T = ['a', 'b', 'c'], U = 'boolean'): any {
  let first = T[0]
  T.shift()
  if (first) {
    return { [first]: TupleToNestedObject(T, U) }
  } else {
    return U
  }
}

console.log(TupleToNestedObject())

// 难点，如何判断是不是 union

type unions = string | number | boolean | symbol | undefined | null

// 方案1. T extends unions ? true : false
// 显然不对，因为单个的时候不算union
// type IsUnion<T> = T extends unions ? true : false

type IsUnion<T, U = T> = T extends U ? ([U] extends [T] ? false : true) : false

type testunion = [unions]

const test2: testunion = ['l']

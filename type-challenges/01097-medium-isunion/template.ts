// 重点  对union的理解
// [U] extends [T] ? false  这个是false！

type IsUnion1<T, U = T> = T extends U ? (U extends T ? false : true) : false

type testunio = keyof 'a' | 'b' | 'c' | 'd'

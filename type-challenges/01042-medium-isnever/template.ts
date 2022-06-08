// 1.
// type IsNever<T> = T extends never ? true : false
// 判断不了nerver

// 有时候要给他套一层
type IsNever<T> = [T] extends [never] ? true : false


// 重点，直接就是数组的用法，简简单单
type ToNumber<S extends string> = CountToT<S>['length']

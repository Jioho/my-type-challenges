type Fibonacci<T extends number, N1 extends number[] = [], N2 extends number[] = [1], C extends number[] = [1]> = T extends C['length']
  ? N2['length']
  : Fibonacci<T, N2, [...N1, ...N2], [...C, 1]>

// 解题思路，T代表的是数组的 length，然而length属性肯定不存在的
// 所以数组还是累加的，所以N2 = N1 + 1的那一项
function Fibonacci(T: number, N1: number[] = [], N2: number[] = [1], Count: number[] = [1]): number {
  console.log(N2.length)
  return T === Count.length ? N2.length : Fibonacci(T, N2, [...N1, ...N2], [...Count, 1])
  //1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
  // console.log(T, R.length + L.length)
  // console.log(R.length, R)
  // return T == N1.length ? R[T] : Fibonacci(T, [...R, [...N1, ...N2].length], [...N1, ...N2], N1)
}

// console.log(Fibonacci(1))
// console.log(Fibonacci(2))
console.log(Fibonacci(8))
// console.log(Fibonacci(9))

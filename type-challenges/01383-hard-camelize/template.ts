// 重点 CamelCase 结合 这个一起做
// 重点2  什么时候判断不用在递归了？

// 判断是否数组呢

type Camelize<T, U extends unknown[] = []> = T extends unknown[]
  ? T extends [infer F, ...infer Rest]
    ? Camelize<Rest, [...U, Camelize<F>]>
    : U
  : T extends object
  ? {
      [P in keyof T as any extends P ? never : CamelCase<P & string>]: T[P] extends object ? Camelize<T[P]> : T[P]
    }
  : T

// 还有一种思路就是还是按对象来循环，判断值是数组的才转，不过兼容性没上面的高
// type Camelize<TObject> = {
//   [key in keyof TObject as SafeCamelCase<key>]: TObject[key] extends unknown[]
//   ? ArrayMap<TObject[key]>
//   : Camelize<TObject[key]>;
// };

type testCamelize = Camelize<{
  some_prop: string
  prop: { another_prop: string }
  array: [{ snake_case: string }]
}>

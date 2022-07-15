type Enum<T extends readonly string[], N extends boolean = false, R extends any = {}, Count extends 1[] = []> = T extends readonly [infer First, ...infer Rest]
  ? Enum<Rest extends string[] ? Rest : [], N, AppendToObject<R, CapitalizeWords<First & string>, N extends true ? Count['length'] : First>, [...Count, 1]>
  : Readonly<R>

// 重点-一个拓展：生成数组的新方式，只要key是 0，1，2，3 出来的也是数组
// type Enum<T extends readonly string[], N extends boolean = false> = {
//   [P in keyof T]: T[P]
// }
const OperatingSystem = ['macOS', 'Windows', 'Linux'] as const

// 到这一步，只需要解决T[P] 是个unions的问题 (其实这种方法应该用不了)
// type Enum<T extends readonly string[], N extends boolean = false> = {
//   [P in keyof T as T[P] extends string ? T[P] : never]: T[P]
// }

// 重点 T extends [infer First, ...infer Rest]  是false ？！所以后面的First才要一步步

// 重点，还是考察 Record 用法(https://github.com/type-challenges/type-challenges/issues/12716)

// 重点，还是 First & string 的时候的场景，到底什么时候 & 有用， Rest 用 & 就没用

type testEunm = Enum<typeof OperatingSystem>

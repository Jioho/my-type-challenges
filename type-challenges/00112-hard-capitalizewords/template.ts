// 困难 重点 110题，转换为大写
// 注意110题可以直接用内置的转

type Break = ' ' | '.' | ','
// 差一点，中间的不能动态匹配了
// type CapitalizeWords<S extends string> = S extends `${infer W}${infer C extends Break}${infer Rest}` ? `${Capitalize<W>}${C}${CapitalizeWords<Rest>}` : Capitalize<S>

// 能匹配符号了，还差一点，这个返回了很多情况
// 不能用 Break，因为 | 的动态解构的特性，只能一个个写了
// 这种也不行，直接多级跳跃了，只能按顺序的 ,. 的匹配
// type CapitalizeWords<S extends string> = S extends `${infer W} ${infer Rest}`
//   ? `${Capitalize<W>} ${CapitalizeWords<Rest>}`
//   : S extends `${infer W}.${infer Rest}`
//   ? `${Capitalize<W>}.${CapitalizeWords<Rest>}`
//   : S extends `${infer W}.${infer Rest}`
//   ? `${Capitalize<W>},${CapitalizeWords<Rest>}`
//   : Capitalize<S>

// 加的参数比较多的方式，逐字比较
// 逐字比较才是最靠谱的
type CapitalizeWords<S extends string, Flag extends boolean = true> = S extends `${infer F}${infer Rest}`
  ? `${Flag extends true ? Uppercase<F> : F}${CapitalizeWords<Rest, F extends Break ? true : false>}`
  : `${Flag extends true ? Uppercase<S> : S}`

type testCapitalizeWords = CapitalizeWords<'foo bar.hello,worl D'>

type mystrin = 'foo 1' extends `${infer F}${Break}${infer Rest}` ? ('foo 1' extends `${F}${infer C}${Rest}` ? `${F}=${C}` : '') : 'foo'

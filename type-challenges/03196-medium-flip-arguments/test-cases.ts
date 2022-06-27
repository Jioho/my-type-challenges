import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FlipArguments1<() => boolean>, () => boolean>>,
  Expect<Equal<FlipArguments1<(foo: string) => number>, (foo: string) => number>>,
  Expect<Equal<FlipArguments1<(arg0: string, arg1: number, arg2: boolean) => void>, (arg0: boolean, arg1: number, arg2: string) => void>>,
]

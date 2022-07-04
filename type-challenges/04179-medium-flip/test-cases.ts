import type { Equal, Expect, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<{ a: 'pi' }, Flip1<{ pi: 'a' }>>>,
  Expect<NotEqual<{ b: 'pi' }, Flip1<{ pi: 'a' }>>>,
  Expect<Equal<{ 3.14: 'pi'; true: 'bool' }, Flip1<{ pi: 3.14; bool: true }>>>,
  Expect<Equal<{ val2: 'prop2'; val: 'prop' }, Flip1<{ prop: 'val'; prop2: 'val2' }>>>,
]

type test = Flip1<{ pi: 3.14; bool: true }>
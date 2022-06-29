import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<BEM1<'btn', ['price'], []>, 'btn__price'>>,
  Expect<Equal<BEM1<'btn', ['price'], ['warning', 'success']>, 'btn__price--warning' | 'btn__price--success'>>,
  Expect<Equal<BEM1<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large'>>
]

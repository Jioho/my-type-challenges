import type { Alike, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Alike<MyReadonly21<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly21<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly21<Todo2, 'title' | 'description'>, Expected>>,
]

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}

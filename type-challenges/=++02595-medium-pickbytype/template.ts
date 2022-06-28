// 和 01367 结合看

type PickByType<T, U> = {
  [P in keyof T as any extends P ? never : T[P] extends U ? P : never]: T[P]
}

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
  [key: number]: boolean
}

type testpick = PickByType<Model, boolean>

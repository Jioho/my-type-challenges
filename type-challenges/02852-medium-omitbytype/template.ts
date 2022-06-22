type OmitByType<T, U> = {
  [P in keyof T as any extends P ? never : T[P] extends U ? never : P]: T[P]
}

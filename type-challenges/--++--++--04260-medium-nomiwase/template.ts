// type AllCombinations<S> = any

type AllCombinations<S extends string, U extends string = StringToUnion<S>, P extends string = U> =
  | U
  | (P extends any ? `${P}${AllCombinations<S, U extends P ? never : U>}` : never)

// type StringToUnion<T extends string> = T extends `${infer First}${infer Rest}` ? First | StringToUnion<Rest> : T

// function AllCombinations(S: string): string[] {
//   return []
// }

// console.log(AllCombinations('ABCD'))

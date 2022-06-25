type Without<T extends unknown[], U> = T extends [U extends any[] ? U[number] : U, ...infer Rest]
  ? Without<Rest, U>
  : T extends [infer F, ...infer Rest]
  ? [F, ...Without<Rest, U>]
  : []

// 这里思路不对，应该一开始就判断好存不存在
// type Without<T extends unknown[], U> = T extends [infer F, ...infer Rest]
//   ? U extends any[]
//     ? F extends keyof U
//       ? Without<Rest, U>
//       : [F, ...Without<Rest, U>]
//     : F extends U
//     ? Without<Rest, U>
//     : [F, ...Without<Rest, U>]
//   : []

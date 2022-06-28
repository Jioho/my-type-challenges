// 重点 和 2595 可以连起来说
// 方便理解 as 
// type testRemoveIndexSignature1 = {
//   [x: string]: string;
//   foo: "foo";
// }

type RemoveIndexSignature1<T> = {
  [P in keyof T as string extends P ? never : number extends P ? never : symbol extends P ? never : P]: T[P]
}

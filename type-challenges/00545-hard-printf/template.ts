// %s => 返回的是 string
// %d => 返回的是 number

// 重点 因为是递归下去的，只需要考虑最终的返回值，拼上之前的函数
type Format<T extends string> = T extends `${infer _}%${infer Char}${infer Rest}`
  ? Char extends 's'
    ? (_: string) => Format<Rest>
    : Char extends 'd'
    ? (_: number) => Format<Rest>
    : Format<Rest>
  : string


// 重点 这一题可以放vue前面，重点理解这个参数的传递

declare function join<TDelimiter extends string>(
  delimiter: TDelimiter
): <TParts extends string[]>(...parts: TParts) => JoinRes<TParts, TDelimiter>;

type JoinRes<TParts, TDelimiter extends string, TResult extends string = ""> = TParts extends [
  infer First extends string,
  ...infer Rest
] ? JoinRes<Rest, TDelimiter, `${TResult}${First}${Rest extends never[] ? '' : TDelimiter}`>
: TResult
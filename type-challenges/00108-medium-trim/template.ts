
type TirmChart2 = ' ' | '\n' | '\t'
type Trim<S extends string> = S extends `${TirmChart2}${infer R}` | `${infer R}${TirmChart2}` ? Trim<R> : S

type TrimLeft1<S extends string> = S extends `${infer R extends (' ' | '\n' | '\t')}${infer F}` ? TrimLeft1<F> : S

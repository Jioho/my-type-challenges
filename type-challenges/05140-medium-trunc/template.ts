type Trunc<T extends string | number> = `${T}` extends `${infer F}.${infer R}` ? F : `${T}`

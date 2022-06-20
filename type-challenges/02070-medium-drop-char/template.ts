type DropChar<S extends string, C extends string, R extends string = ''> = S extends `${infer F}${infer Rest}` ? (F extends C ? DropChar<Rest, C, R> : DropChar<Rest, C, `${R}${F}`>) : R

type Fibonacci1<T extends number, P extends 1[] = [], N extends 1[] = [1], C extends 1[] = []> = C['length'] extends T ? P['length'] : Fibonacci1<T, N, [...P, ...N], [...C, 1]>

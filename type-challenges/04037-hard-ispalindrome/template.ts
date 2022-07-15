type ReverseString<S extends string, R extends string = ''> = S extends `${infer F}${infer Rest}` ? ReverseString<Rest, `${F}${R}`> : R

type IsPalindrome<T extends string | number, U extends string = ReverseString<`${T}`>> = `${T}` extends U ? true : false

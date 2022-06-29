// Type instantiation is excessively deep and possibly infinite
// type MinusOne<T extends number, U extends number[] = []> = U['length'] extends T ? U[0] : MinusOne<T, [U['length'], ...U]>


type MinusOne<T extends number, U extends number[] = []> = U['length'] extends T ? U[0] : MinusOne<T, [U['length'], ...U]>

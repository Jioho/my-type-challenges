// 重点 number的使用，数组的循环

type BEM1<B extends string, E extends string[], M extends string[]> = E['length'] extends 0 ? (M['length'] extends 0 ? B : `${B}--${M[number]}`) : BEM1<`${B}__${E[number]}`, [], M>

// 🌰 - 2
type TestUnion<T extends string, U extends string> = `${T}--${U}`
type TestUnionDemo = TestUnion<'1' | '2', '3' | '4'> // "1--3" | "1--4" | "2--3" | "2--4"

// 🌰 - 2
type TestArray<T extends string[], U extends string[]> = `${T[number]}--${U[number]}`
type TestArrayDemo = TestArray<['1', '2'], ['3', '4']> // "1--3" | "1--4" | "2--3" | "2--4"

// 重点 number的使用，数组的循环

type BEM1<B extends string, E extends string[], M extends string[]> = E['length'] extends 0 ? (M['length'] extends 0 ? B : `${B}--${M[number]}`) : BEM1<`${B}__${E[number]}`, [], M>

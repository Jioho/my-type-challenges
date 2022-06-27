type If<C extends boolean, T, F> = C extends true ? T : F

// extends 还要区分严格和非严格模式
// 如果非严格模式下 null 是 可以 extends 给 boolean 的
// 详情可以看 https://www.typescriptlang.org/docs/handbook/type-compatibility.html
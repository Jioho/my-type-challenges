// 重点 - 这里用到一个特性，就是非必填的，都会有个 undefined 属性

type IsRequiredKey<T, K extends keyof T> = undefined extends T[K] ? false : true


// class 特性，keyof可以直接遍历public的内容（。。。）
type ClassPublicKeys<T> = keyof T

// 重点 数组如何解决，keyof 数组会遍历出来很多东西

// type ObjectKeyPaths<T extends object, B extends string = '', K = keyof T> = K extends keyof T
//   ? T[K] extends object
//     ? ObjectKeyPaths<T[K], `${MergeKey<B, T[K] extends unknown[] ? T[K] : K & string>}.`> | MergeKey<B, K & string>
//     : MergeKey<B, K & string>
//   : MergeKey<B, K & string>

// type MergeKey<B extends string, K extends string | unknown[]> = K extends unknown[] ? `${B}${keyof K & number}` : `${B}${K & string}`


type ObjectKeyPaths<T extends object, P extends string = never> =
  P | {
    [K in keyof T & (string | number)]:
    T[K] extends object ? (
      ObjectKeyPaths<T[K], AddPrefix<P, K>>
     ) : AddPrefix<P, K>
  }[keyof T & (string | number)]

type AddPrefix<P extends string, Path extends  & string | number> =
  [P] extends [never] ? (
    `${Path}`
  ) : Path extends number ? (
    `${P}.${Path}` | `${P}[${Path}]` | `${P}.[${Path}]`
  ) : `${P}.${Path}`
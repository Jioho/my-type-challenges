/**
 * 1. readonly [P in keyof T]: T[P] extends {} ? DeepReadonly<T[P]> : T[P]
 *
 * 用了这个后，并没有达到递归的效果，最后返回的会带有 DeepReadonly
 */

type DeepReadonly<T> = {
  readonly [k in keyof T]: keyof T[k] extends never ? T[k] : DeepReadonly<T[k]>
}

// type Sum<A extends string | number | bigint, B extends string | number | bigint> = ArrSum<Reverse<Split<`${A}`, ''>>, Reverse<Split<`${B}`, ''>>>
type Sum<A extends string | number | bigint, B extends string | number | bigint> = ArrSum<Split<`${A}`, ''>, Split<`${B}`, ''>>

// type ArrSum<
//   A extends string[] = [],
//   B extends string[] = [],
//   R extends string = '',
//   Enter = false,
//   FSum extends 1[] = Add<GetFirst<A>, GetFirst<B>, Enter extends true ? '1' : '0'>
// > = HasMore<A, B> extends true
//   ? `${FSum['length']}` extends `1${infer Rest}`
//     ? Rest extends ''
//       ? ArrSum<Shift<A>, Shift<B>, `1${R}`, false>
//       : ArrSum<Shift<A>, Shift<B>, `${Rest}${R}`, true>
//     : ArrSum<Shift<A>, Shift<B>, `${FSum['length']}${R}`, false>
//   : FSum extends [1]
//   ? `1${R}`
//   : R

// 用 pop 方式，就少一个 Reverse，也是按正常的顺序
type ArrSum<
  A extends string[] = [],
  B extends string[] = [],
  R extends string = '',
  Enter = false,
  FSum extends 1[] = Add<GetLast<A>, GetLast<B>, Enter extends true ? '1' : '0'>
> = HasMore<A, B> extends true
  ? `${FSum['length']}` extends `1${infer Rest}`
    ? Rest extends ''
      ? ArrSum<Pop<A>, Pop<B>, `1${R}`, false>
      : ArrSum<Pop<A>, Pop<B>, `${Rest}${R}`, true>
    : ArrSum<Pop<A>, Pop<B>, `${FSum['length']}${R}`, false>
  : FSum extends [1]
  ? `1${R}`
  : R
// type ArrSum<
//   A extends string[] = [],
//   B extends string[] = [],
//   R extends string = '',
//   Enter = false,
//   FSum extends 1[] = Add<GetLast<A>, GetLast<B>, Enter extends true ? '1' : '0'>
// > = HasMore<A, B> extends true
//   ? `${FSum['length']}` extends `1${infer Rest}`
//     ? Rest extends ''
//       ? ArrSum<Pop<A>, Pop<B>, `1${R}`, false>
//       : ArrSum<Pop<A>, Pop<B>, `${Rest}${R}`, true>
//     : ArrSum<Shift<A>, Shift<B>, `${FSum['length']}${R}`, false>
//   : FSum extends [1]
//   ? `1${R}`
//   : R

type Add<N1 extends string, N2 extends string, N3 extends string = '0'> = [...CountToT<N1>, ...CountToT<N2>, ...CountToT<N3>]

type GetFirst<A extends string[] = []> = A extends [infer F, ...infer Rest] ? F : '0'

type GetLast<A extends string[] = [], Default extends string = '0'> = A extends [...infer Rest, infer L] ? L : Default

type HasMore<A extends string[], B extends string[]> = A['length'] extends 0 ? (B['length'] extends 0 ? false : true) : true

type testSum = Sum<'0', 213>

function Sum(A: string, B: string) {
  let Arr = A.split('')
  let Brr = B.split('')

  var add = function (a1: string[] = [], b1: string[] = [], result: string = '', Enter = false): string {
    let b = b1.shift()
    let a = a1.shift()
    console.log(a, b, result)

    if (a) {
      if (b) {
      }
    }
    if (a && b) {
      let res = parseInt(a) + parseInt(b) + (Enter ? 1 : 0)
      let resStr = res
      if (resStr >= 10) {
        resStr = resStr - 10
      }
      return add(a1, b1, resStr + result, res >= 10)
    } else {
      return Enter ? `1${result}` : result
    }
  }

  return add(Arr.reverse(), Brr.reverse())
}

console.log(Sum('80', '22'))

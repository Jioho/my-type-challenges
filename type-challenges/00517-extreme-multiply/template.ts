type Multiply<A extends string | number | bigint, B extends string | number | bigint> = isZero<A, B> extends true ? '0' : ArrMultiply<Split<`${A}`, ''>, Split<`${B}`, ''>>

type isZero<A extends string | number | bigint, B extends string | number | bigint> = `${A}` extends '0' ? true : `${B}` extends '0' ? true : false

type ArrMultiply<A extends string[], B extends string[], fill extends string = '', R extends string = '', AL extends string = GetLast<A, ''>> = AL extends ''
  ? R
  : ArrMultiply<Pop<A>, B, `0${fill}`, Sum<`${OneMultiplyMore<AL, B>}${fill}`, R>>

type OneMultiplyMore<
  O extends string = '1',
  M extends string[] = [],
  fill extends string = '',
  R extends string = '',
  S extends unknown[] = SingleMultiply<CountToT<O>, CountToT<GetLast<M, '1'>>>
> = M extends [] ? R : OneMultiplyMore<O, Pop<M>, `0${fill}`, Sum<`${S['length']}${fill}`, R>>

type SingleMultiply<A extends unknown[] = [], N extends unknown[] = [], Count extends 1[] = [], R extends unknown[] = []> = Count['length'] extends N['length']
  ? R
  : SingleMultiply<A, N, [...Count, 1], [...R, ...A]>

type testOneMultiplyMore = OneMultiplyMore<'9', ['2', '0', '0']>

type testMultiply = Multiply<0, 16> // 00 ??
type testMultiply2 = Multiply<259, 9125385> // 2363474715 = 188931028401420127800000000

type testArrMultiply = ArrMultiply<['3', '0', '0'], ['1', '2', '1', '4']>

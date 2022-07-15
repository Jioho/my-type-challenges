import { Equal } from '@type-challenges/utils'

// 重点 几种解法
// 测试 1 & T 是什么意思
// export type IsAny<T> = Equal<T, any> extends true ? true : false
export type IsAny<T> = (<K>() => K extends T ? 1 : 2) extends <K>() => K extends any ? 1 : 2 ? true : false

// unknown extends T ? [T] extends [1] ? true : false : false;

// type IsAny<TType> = 0 extends (1 & TType) ? true : false;

type test = 0 extends (1 & never) ? true : false

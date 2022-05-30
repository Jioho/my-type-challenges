/**
 * 思路，先tostring，然后逐个字符判断
 *  - tostring 怎么写？
 * 
 * 解决，直接在外面加字符串来判断。绝。。
 */

type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer R}` ? `${R}` : `${T}`

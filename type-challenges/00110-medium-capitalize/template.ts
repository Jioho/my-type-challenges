type chartMap = {
  a: 'A'
  b: 'B'
  c: 'C'
  d: 'D'
  e: 'E'
  f: 'F'
  g: 'G'
  h: 'H'
  i: 'I'
  j: 'J'
  k: 'K'
  l: 'L'
  m: 'M'
  n: 'N'
  o: 'O'
  p: 'P'
  q: 'Q'
  r: 'R'
  s: 'S'
  t: 'T'
  u: 'U'
  v: 'V'
  w: 'W'
  x: 'X'
  y: 'Y'
  z: 'Z'
}

/**
 * 1. type MyCapitalize<S extends string> = S extends `${infer L}${infer R}` ? L extends keyof chartMap ? `${chartMap[L]}${R}` : S : never
 * 
 *  报错是因为类型没定义对，这里可以不用枚举
 */
type MyCapitalize<S extends string> = S extends `${infer L}${infer R}` ? (L extends keyof chartMap ? `${chartMap[L]}${R}` : S) : S

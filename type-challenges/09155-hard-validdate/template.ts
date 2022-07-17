// 重点，也是减法的应用，这时候减法要支持传入 string 或者 number类型了

type ValidDate<T extends string> = T extends `${infer F}${infer S}${infer R}`
  ? R extends '00'
    ? false
    : `${F}${S}` extends keyof MomthMap
    ? Minus<MomthMap[`${F}${S}`], R> extends string
      ? false
      : true
    : false
  : false

type MomthMap = {
  '01': 31
  '03': 31
  '05': 31
  '07': 31
  '08': 31
  '10': 31
  '12': 31

  '04': 30
  '06': 30
  '09': 30
  '11': 30

  '02': 28
}

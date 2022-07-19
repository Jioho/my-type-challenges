type Sum<A extends string | number | bigint, B extends string | number | bigint> = string

function Sum(A: string, B: string) {
  let Arr = A.split('')
  let Brr = B.split('')

  var add = function (a1: string[] = [], b1: string[] = [], result: string = '', moreThan = false): string {
    let b = b1.shift()
    let a = a1.shift()
    if (a && b) {
      let res = parseInt(a) + parseInt(b) + (moreThan ? 1 : 0)
      let resStr = res
      if (resStr >= 10) {
        resStr - 10
      }
      return add(a1, b1, result + resStr, res >= 10)
    } else {
      return result
    }
  }

  return add(Arr, Brr)
}

console.log(Sum('50', '50'))

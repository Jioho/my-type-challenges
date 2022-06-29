// type BEM<B extends string, E extends string[], M extends string[]> = E['length'] extends 0
//   ? B
//   : E extends [infer F, ...infer R]
//   ? R['length'] extends 0
//     ? BEM<`${B}__${E[0]}`, [], M>
//     : BEM<B, R, M>
//   : BEM<`${B}__${E[0]}`, [], M>

// ！！重点在number，而不是递归

type BEM<B extends string, E extends string[], M extends string[]> = E extends []
  ? M extends []
    ? B
    : `${B}--${M[number]}`
  : M extends []
  ? `${B}__${E[number]}`
  : `${B}__${E[number]}--${M[number]}`

type testbtm = BEM<'btn', ['price'], []>
// M['length'] extends 0 ?
// B :
// M extends [infer F, ...infer R extends string[]] ? BEM<B, [], R> : `${B}--${M[0]}` :
//

// function bem(B: string, E: string[], M: string[]) {
//   if (E.length == 0 && M.length === 0) {
//     console.log(B)
//   } else {
//     if (E.length > 0) {
//       E.forEach(item => {
//         bem(`${B}__${item}`, [], M)
//       })
//     } else {
//       M.forEach(item => {
//         console.log(`${B}--${item}`)
//       })
//     }
//   }
// }

function bem(B: string, E: string[], M: string[]) {
  if (M.length == 0) {
    if (E.length == 0) {
      console.log(B)
    } else {
      let f = E.unshift()
    }
  }
  if (E.length == 0) {
    bem(B, [], M)
  }

  // if (E.length == 0 && M.length === 0) {
  //   console.log(B)
  // } else {
  //   if (E.length > 0) {
  //     E.forEach(item => {
  //       bem(`${B}__${item}`, [], M)
  //     })
  //   } else {
  //     M.forEach(item => {
  //       console.log(`${B}--${item}`)
  //     })
  //   }
  // }
}

// function bem(B: string, E: string[], M: string[]): void {
//   return E.length == 0 ? (M.length == 0 ? bem(B, [], [M[1], M[2]]) : console.log(`${B}--${M[0]}`)) : console.log('never')
// }

bem('btn', ['price'], ['warning', 'success'])
console.log('===============')
bem('btn', ['price'], [])
console.log('===============')

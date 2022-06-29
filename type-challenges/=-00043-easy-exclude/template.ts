/**
 * 1. 循环 U 类型
 * 2. 剔除 U 类型
 */

/**
 * [P in U]-: P  思路全错
 * 
 * T 判断在U里面，如果在U的话，就返回never，否则才返回T，然后这部分都会自己合并起来
 */
type MyExclude<T, U> = T extends U ? never : T

function myExclude(arr1: string[], arr2: string[]) {
  let result: string[] = []
  arr1.forEach(item => {
    if (arr2.indexOf(item) === -1) {
      result.push(item)
    }
  })
  return result
}

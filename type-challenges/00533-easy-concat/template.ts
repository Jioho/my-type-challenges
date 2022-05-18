/**
 * 1. type Concat<T extends any[], U extends any[]> = [...T, ...U]
 *
 * 虽然也可以正常通过。不过其实不太好，因为对于未知类型，尽量用unknown
 */

type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]

function concat(T: any[], U: any[]) {
  if (Array.isArray(T) && Array.isArray(U)) {
    return [...T, ...U]
  }
}

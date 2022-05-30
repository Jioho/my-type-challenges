// type Chainable = {
//   option(key: string, value: any): any
//   get(): any
// }

type Chainable = {
  options: any
  option(key: string, value: any): any
  get(): options
}

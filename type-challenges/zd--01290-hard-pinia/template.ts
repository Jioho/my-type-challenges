// 重点，和vue一样的

declare function defineStore<S, G, A>(store: {
  id: string
  state: () => S
  getters: G & ThisType<Readonly<S> & { [K in keyof G]: G[K] extends () => infer R ? R : never }>
  actions: A & ThisType<S & A>
}): S & { [K in keyof G]: G[K] extends () => infer R ? R : never } & A

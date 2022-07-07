// 困难 - 重点
// 1. ThisType 的作用
// 2. 新增参数的能力

type GetComputed<TComputed> = {
  [key in keyof TComputed]: TComputed[key] extends () => infer Result ? Result : never
}

type Options<TData, TComputed, TMethods> = {
  data: (this: void) => TData
  computed: TComputed & ThisType<TData>
  methods: TMethods & ThisType<TData & GetComputed<TComputed> & TMethods>
}

declare function SimpleVue<TData, TComputed, TMethods>(options: Options<TData, TComputed, TMethods>): any

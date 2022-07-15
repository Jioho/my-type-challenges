type GetComputed1<TComputed> = {
  [key in keyof TComputed]: TComputed[key] extends () => infer Result ? Result : never
}

type GetProps<TProps> = {
  [K in keyof TProps]: 'type' extends keyof TProps[K] ? TProps[K]['type'] : TProps[K]
}

type Options1<TData, TComputed, TMethods, TProps> = {
  data: (this: ThisType<TData & TComputed & TMethods & GetProps<TProps>>) => TData
  computed: TComputed & ThisType<TData>
  props: TProps & ThisType<GetProps<TProps>>
  methods: TMethods & ThisType<TData & GetComputed1<TComputed> & TMethods>
}

declare function VueBasicProps<TData, TComputed, TMethods, TProps>(options: Options1<TData, TComputed, TMethods, TProps>): any

// import { MergeInsertions } from "@type-challenges/utils";

// export type DeepObjectToUniq<O extends object> = MergeInsertions<O>


// 重点，研究下 DeepObjectToUniq 和 MergeInsertions 有什么区别？
type DeepObjectToUniq<O extends object> = {
  [K in keyof O]: O[K] extends object
    ? DeepObjectToUniq<O[K] & { _?: [O, K] }>
    : O[K];
};
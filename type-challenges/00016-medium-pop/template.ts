type Pop<T extends any[]> = T extends [...infer P, infer L] ? P : never

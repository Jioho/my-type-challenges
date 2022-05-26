type Last<T extends any[]> = T extends [...infer Other, infer Last] ? Last : never

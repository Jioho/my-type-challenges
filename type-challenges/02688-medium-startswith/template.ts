type StartsWith<T extends string, U extends string> = T extends `${U}${infer Rest}` ? true : false

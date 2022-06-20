type EndsWith<T extends string, U extends string> = T extends `${infer F}${U}` ? true : false

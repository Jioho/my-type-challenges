type MyOmit<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>

type ConstructTuple<L extends number, R extends unknown[] = []> = R['length'] extends L ? R : ConstructTuple<L, [...R, unknown]>

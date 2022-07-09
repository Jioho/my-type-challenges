type LengthOfString2<S extends string> = S['length']

type testlen = LengthOfString2<''>
type testlen2 = LengthOfString<''>
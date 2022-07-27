type Length<T extends readonly any[]> = T["length"]

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const

type tl = Length<typeof tesla>;
type sdf = typeof tesla

const getLength = (array) => {
    if (!Array.isArray(array)) return;
    return array.length;
}

// tuple 固定长度，字面量/类型组成的数组 [string, number]/ ['a', 'b']
type stringArr = string[]
type tstringarr = stringArr['length'] // number 长度未知

type stringNumberPair = [string, number];
type stringNP = stringNumberPair['length'];
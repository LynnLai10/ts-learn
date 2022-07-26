type TupleToObject<T extends readonly (string |  number | symbol)[]> = {
    [P in T[number]]: P
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type t = TupleToObject<typeof tuple>

const tupleToObject = (array: any[]) => {
    const obj = {};
    array.map(item => {
        obj[item] = item;
    })
    return obj;
}
// index
type TupleToIndex<T extends readonly any[]> = {
    [P in keyof T]: P
}

type r = TupleToIndex<typeof tuple>

// 1. keyof array => index
// 2. P in T[number] => 遍历数组 union

type numberArray = ['a', 1, 2];
type n = numberArray[number]; //'a' | 1 | 2
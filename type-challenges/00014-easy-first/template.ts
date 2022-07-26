// 1.
// type First<T extends any[]> = T extends [] ? never : T[0]
// const first = (array) => array[0];

// 数组长度 T["length"]
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]
// const first = (array) => {
//     if (array.length === 0) {
//         return 'never'
//     } else {
//         return array[0]
//     }
// }

// T[number]
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// infer
type First<T extends any[]> = T extends [infer First, ... infer Rest] ? First : never
// 能否解构出一个First，没有就是never
// const first = (array) => {
//     const [first, ...rest] = array;
//     return first ? first : 'never'
// }

// 空数组 [0] => undefined
type FirstOfEmptyArray<T extends any[]> =T[0];
type e = FirstOfEmptyArray<[]>;
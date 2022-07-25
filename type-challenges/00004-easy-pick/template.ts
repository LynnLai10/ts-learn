type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

// [P in K] map

// const myPick = (object, keys) => {
//     const obj = {};
//     keys.map(key => {
//         if (key in object) {
//             obj[key] = object[key];
//         }
//     })
//     return obj
// }

// 1. return an obj
// 2. map keys
// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// 3. get value, indexed, object[key]
// https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content
// 4. check if key in object
//   1) keyof
//      https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#handbook-content
//   2) extends 约束 for union
//      https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-types
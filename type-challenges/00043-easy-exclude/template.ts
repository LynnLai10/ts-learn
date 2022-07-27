type MyExclude<T, U> = T extends U ? never : T;

const myExclude = (array, array2) => {
    const result = [];
    for (const item of array) {
        if (!array2.includes(item)) result.push(item)
    }
    return result;
}

//差集
//type MyExclude<T, U> = T extends U ? never : T;
//并集
// type MyExclude<T, U> = T extends U ? T : never;

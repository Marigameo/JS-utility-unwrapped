/**
 * Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, 
 * in which only the first occurrence of each element is kept. 
 * The order of result values is determined by the order they occur in the array.
 * _.uniq(array)
 * ref - https://lodash.com/docs/4.17.15#uniq
 */

// without using any in-built methods
const _uniq = (array) => {
    let resultArray = [];

    const includes = (array, element) => array.find(el => el === element)

    for (let i = 0; i < array.length; i++) {
        if (!includes(resultArray, array[i])) {
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}

console.log(_uniq([2, 1, 2]));

console.log(_uniq([2, 1, 2, 3, 4, 3, 4, 5, 1, 1]));

// when in-built methods are allowed
const _uniq_stable = (array) => {
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        if (!resultArray.includes(array[i])) {
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}

console.log(_uniq_stable([2, 1, 2]));

console.log(_uniq_stable([2, 1, 2, 3, 4, 3, 4, 5, 1, 1]));


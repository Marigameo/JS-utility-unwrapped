/**
 * Creates an array with all falsey values removed. 
 * The values false, null, 0, "", undefined, and NaN are falsey.
 * _.compact(array)
 * ref - https://lodash.com/docs/4.17.15#compact
 */

const _compact = (array) => {
    // error handling - check if array is valid
    if (!Array.isArray(array)) {
        throw new Error('Not a valid array');
    }

    let resultArray = [];

    array.forEach(element => !element || resultArray.push(element));

    return resultArray;
}

console.log(_compact([0, 1, false, 2, '', 3]));

console.log(_compact([0, NaN, undefined, 2, '', 3]));
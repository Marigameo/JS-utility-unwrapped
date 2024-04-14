/**
 * Recursively flattens array.
 * _.flattenDeep(array)
 * ref - https://lodash.com/docs/4.17.15#flattenDeep
 */

const _flattenDeep = (array) => {
    let resultArray = [];

    if (!Array.isArray(array)) {
        throw new Error('Not a valid array');
    }

    array.forEach(element => {
        if (Array.isArray(element)) {
            resultArray = [...resultArray, ..._flattenDeep(element)];
        } else {
            resultArray.push(element);
        }
    });

    return resultArray;
}


console.log(_flattenDeep([1, [2, [3, [4]], 5]]));

console.log(_flattenDeep([1]));




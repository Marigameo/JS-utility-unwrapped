/**
 * Variable Naming: Consider using more descriptive variable names. For example, includes could be renamed to isElementInArray.

Error Handling: Add input validation to ensure that the input to the _uniq function is an array.

Efficiency: Both implementations have a time complexity of O(n^2) due to nested loops. If the input array is large, this may not be the most efficient solution. You could consider using a more efficient algorithm, such as using a Set to track unique elements.

Consistency: It's good to provide both implementations for interview purposes, but make sure they are consistent in terms of style and approach.

Comments: Adding comments to explain the purpose of each function and any complex logic would improve readability and make it easier for others to understand your code.

Testing: Write additional test cases to ensure that your function works correctly in all scenarios, such as empty arrays or arrays with various data types.
 */

// Without using any built-in methods
const _uniq = (array) => {
    if (!Array.isArray(array)) {
        throw new Error('Input is not an array');
    }

    let resultArray = [];

    const isElementInArray = (array, element) => array.find(el => el === element);

    for (let i = 0; i < array.length; i++) {
        if (!isElementInArray(resultArray, array[i])) {
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}

// Using built-in methods
const _uniq_stable = (array) => {
    if (!Array.isArray(array)) {
        throw new Error('Input is not an array');
    }

    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        if (!resultArray.includes(array[i])) {
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}

/**
Use of Arrow Functions: Since you're using arrow functions consistently, consider using an arrow function for the forEach callback as well for consistency.

Error Handling: Your error handling is good. However, instead of throwing an error, you might choose to return an empty array if the input is not an array. This way, the function fails gracefully without crashing the program.

Use of Filter: Instead of using forEach to iterate over the array and conditionally push elements to the result array, you can use the filter method, which is more concise and clearer in its intent.
 */

const compact = (array) => {
    // Check if array is valid, return empty array if not
    if (!Array.isArray(array)) {
        return [];
    }

    return array.filter(element => !!element);
}

// Test cases
console.log(compact([0, 1, false, 2, '', 3])); // [1, 2, 3]
console.log(compact([0, NaN, undefined, 2, '', 3])); // [2, 3]

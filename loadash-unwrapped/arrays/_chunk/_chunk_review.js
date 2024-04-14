// code review by - Chat GPT

/**
Variable Declaration: Always declare variables (i in this case) with let or const to avoid global scope pollution.

Consistency in Naming: You're using both camelCase and _underscore naming conventions. Stick with one convention throughout your codebase for consistency.

Code Comments: Adding comments explaining the purpose of your functions or code blocks can improve readability and maintainability, especially if someone else (or future you) needs to understand the code later.

Error Handling: Ensure that your function can handle edge cases gracefully. For instance, what happens if array is not an array, or size is not a positive integer? Adding some checks and possibly throwing errors can make your function more robust.

Avoid Unnecessary Variables and Functions: You don't really need the resetToDefault function. You can reset the variables directly where needed.

Array Mutation: Your function mutates the input array (subArray.push(array[i])). While this might be okay depending on your use case, it's generally good practice to avoid mutating input parameters.
 */

const chunk = function (array, size = 1) {
    if (!Array.isArray(array) || !Number.isInteger(size) || size <= 0) {
        throw new Error('Invalid input');
    }

    const resultArray = [];
    let subArray = [];

    for (let i = 0; i < array.length; i++) {
        subArray.push(array[i]);

        if (subArray.length === size || i === array.length - 1) {
            resultArray.push(subArray);
            subArray = []; // Reset subArray
        }
    }

    return resultArray;
}

// Test cases
console.log(chunk(['a', 'b', 'c', 'd'], 2));
console.log(chunk(['a', 'b', 'c', 'd'], 3));

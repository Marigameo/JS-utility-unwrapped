/**
 * Your code looks good and functions correctly for flattening arrays recursively. Here's a brief review and some suggestions for improvement:

Clarity: Your function is clear and concise, making good use of recursion to flatten nested arrays.

Error Handling: You correctly handle the case where the input is not an array by throwing an error. This provides helpful feedback to users of your function.

Spread Operator: Your use of the spread operator (...) inside the if (Array.isArray(element)) block is a nice way to concatenate arrays. It's more concise than using concat().

Readability: The code is quite readable, which is essential for maintainability. Each part of the code is appropriately spaced and formatted.

Comments: Your comments provide clear documentation for the function, indicating its purpose and referencing the lodash documentation. This is helpful for anyone reading or working with the code.

Function Name: The function name _flattenDeep is good, but consider whether you want to prefix it with an underscore. This convention typically indicates that the function is meant to be private or internal. Since JavaScript doesn't have true private functions, this convention is more of a suggestion. If you intend for this function to be publicly used, you might consider removing the underscore.

Overall, your code looks solid! Keep up the good work!
 */
/**
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 * _.chunk(array, [size=1])
 * ref - https://lodash.com/docs/4.17.15#chunk
 */

const _chunk = function (array, size = 1) {
    const length = array.length;

    let count = 0;

    let subArray = [];

    const resultArray = [];

    const resetToDefault = () => {
        count = 0;
        subArray = [];
    }

    for (i = 0; i < length; i++) {
        count++;

        subArray.push(array[i]);

        if (count === size) {
            resultArray.push(subArray);
            resetToDefault();
        }

        if (count < size && i === length - 1 && subArray.length) {
            resultArray.push(subArray)
        }
    }
    console.log(resultArray);
}


_chunk(['a', 'b', 'c', 'd'], 2);

_chunk(['a', 'b', 'c', 'd'], 3);

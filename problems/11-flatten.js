/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(array) {
    let results = [];
    if (array.length === 0) return results;

    if (Array.isArray(array[0])) {
        results = results.concat(flatten(array[0]));
    } else {
        results.push(array[0]);
    }

    results = results.concat(flatten(array.slice(1)));
    return results;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = flatten;
} catch (e) {
    module.exports = null;
}
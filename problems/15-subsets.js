/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

function subsets(array) {
    let results = [];
    let last = array.length - 1;

    if (array.length === 0) return [results];
    let subs = subsets(array.slice(0, last));
    return subs.concat(subs.map(sub => [...sub, array[last]]));
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = subsets;
} catch (e) {
    module.exports = null;
}
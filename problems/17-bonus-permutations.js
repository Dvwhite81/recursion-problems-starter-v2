/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

function permutations(array) {
  let results = [];
  if (array.length === 0) return results;
  if (array.length === 1) return [array];
  
  let first = array.pop();
  let perms = permutations(array);

  perms.forEach(perm => {
    for (let i = 0; i <= perm.length; i++) {
      let add = perm.slice(0, i).concat([first]).concat(perm.slice(i));
      results.push(add);
    }
  })
  return results;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}

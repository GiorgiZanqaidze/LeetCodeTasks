/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
        return arr.map(fn)
};

console.log(map([1,2,3], function plusone(n) { return n + 1; }))
console.log(map([1,2,3], fn = function constant() { return 42; }))
console.log(map([1,2,3], fn = function plusI(n, i) { return n + i; }))
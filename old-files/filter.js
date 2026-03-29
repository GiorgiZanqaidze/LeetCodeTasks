/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArr = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr
};

console.log(filter(arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }))
console.log(filter(arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }))
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let sum = init

    for (let i = 0; i < nums.length; i++) {
        sum = fn(sum, nums[i])
    }


    return sum
};

console.log(reduce([1,2,3,4] ,function sum(accum, curr) { return accum + curr; }, 0))
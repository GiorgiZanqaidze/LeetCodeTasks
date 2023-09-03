/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let indexes = []


    for (let i = 0; i < nums.length; i++) {

        const firstNum = nums[i]

        for (let j = i + 1; j < nums.length; j++) {

            if (firstNum + nums[j] === target) {
                indexes = [i, j]
                break;
            }
        }
    }

    return indexes
};


console.log(twoSum([1,2,3], 4))
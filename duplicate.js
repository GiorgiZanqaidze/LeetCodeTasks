/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {

    for (let i = 0; i < nums.length; i++) {

        const filteredNums = nums.filter((num, index) => index !== i)

        if (filteredNums.includes(nums[i])) {
            return true
        }

    }

    return false
};


console.log(containsDuplicate([1, 2,3]))
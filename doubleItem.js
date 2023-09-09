
const singleNumber = function(nums) {

    for (let i = 0; i < nums.length; i++) {
        const filtered = nums.filter((item, index) => i !== index)
        if (!filtered.includes(nums[i])) {
            return nums[i]
        }
    }
};


console.log(singleNumber([1]))




/**
 * @param {number[]} nums
 * @param {number} val
 * @return {unknown[]}
 */
const removeElement = function(nums, val) {

    let k=nums.length;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==val){
            nums[i] = '_';
            k-=1;
        }
    }
    nums.sort();
    return k;
};





console.log(removeElement(nums = [3,2,2,3], val = 3))
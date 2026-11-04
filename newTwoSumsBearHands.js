const nums = [2, 7, 11, 15]
const target = 9

function twoSum(nums, target) {
    for (let i=0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                 return [i, j]
            }
        }
    }
    return []
}


console.log(twoSum(nums, target))





// const nums = [2, 7, 11, 15]
// const target = 9


// function(nums, target) {
    
// }

//     seen = map
// {
//  1: 0
//   2: 1
// }

// for (let i = 0; i < nums.length; i++) {
    
//     if (seen(target - nums[i])) {
//          return [i, map.[nums[i]]]
//     } else {
//         seen[nums[i] = i]
//     }

// }

const nums2 = [2, 7, 11, 15]
const target2 = 14


function twoSum2(nums, target) {
    let seen = {}

    for (let i = 0; i < nums.length; i++) {

        if ((target - nums[i]) in seen) {
            return [i, seen[target - nums[i]]] 
        } else {
            seen[nums[i]] = i
        }
    }

    return [];

}


console.log(twoSum2(nums2, target2))
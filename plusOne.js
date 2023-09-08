/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function(digits) {
//     return  parseInt(digits.join('')) + 1
// };

var plusOne = function(digits) {
    let number = digits[digits.length - 1]


    if (number !== 9) {
        number+=1
    }  else {
        number = 0
    }

    digits[digits.length - 1] = number

    return digits
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
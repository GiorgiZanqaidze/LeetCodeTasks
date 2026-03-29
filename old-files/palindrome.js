/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    let toArr = x.toString().split('')
    let reverseArr = []

    for (let i = 0; i < toArr.length; i++) {
        reverseArr.unshift(toArr[i])
    }

    return toArr.join('') === reverseArr.join('');
};


console.log(isPalindrome(12))
/**
 * @param {string} s
 * @return {string}
 */
const lengthOfLastWord = function(s) {
    let array = s.split('')
    let isLastLetter = false
    let lastWordFirstLetterIndex

    for (let i = s.length -1; i > 0; i--) {
        if (s[i] === " " && !isLastLetter) {
            array.pop()
        } else if (s[i] === " " && isLastLetter ) {
            lastWordFirstLetterIndex = i + 1
            break;
        } else {
            isLastLetter = true
        }
    }
    return  array.join('').slice(lastWordFirstLetterIndex).length
};


console.log(lengthOfLastWord(" a"))
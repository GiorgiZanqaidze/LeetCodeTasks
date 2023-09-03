/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const validPairs = [ "()", "{}", "[]"]
    let valid = false

    for (let i = 0; i < s.length; i+=2) {
        const pairs = s[i] + s[i + 1]
        if (validPairs.includes(pairs)) {
            valid = true
        } else {
            valid = false
            break;
        }
    }

    return valid
};


console.log(isValid('(){)'))
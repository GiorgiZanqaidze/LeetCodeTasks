/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let resultStr = ''

    for (let i = 0; i < indices.length; i++) {
        resultStr+= s[indices[i]]
    }

    return resultStr
};

var restoreString = function(s, idx) {
    const result = [];
    for(let i = 0; i < s.length; i++) {
        result[idx[i]] = s[i]
    }
    return result.join('');
};


console.log(restoreString('abc', [2,0,1]))
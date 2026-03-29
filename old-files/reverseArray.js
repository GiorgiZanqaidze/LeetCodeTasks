/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const str = str1.split(str2).filter(item => item !== '').join('')

    if (str === str1) {
        return ''
    } else {
        return str
    }
    
};


console.log(gcdOfStrings('giogiogiogio123', 'gio13'))
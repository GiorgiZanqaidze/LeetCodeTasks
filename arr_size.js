/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
const chunk = function(arr, size) {
    let chunckArr = []
    let subArrs = []

    for (let i = 0; i < arr.length; i ++) {
        chunckArr.push(arr[i])
        if (chunckArr.length === size) {
            subArrs.push(chunckArr)
            chunckArr = []
        } else if (arr.length - 1 === i) {
            subArrs.push(chunckArr)
        }
    }
    return subArrs
};



console.log(chunk(arr = [], size = 1))
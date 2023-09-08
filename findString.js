/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
    let letters = needle.length

    let findIndex = -1

    for (let i = 0; i < haystack.length; i++) {

        let currStr = haystack.slice(i, i + letters)

        if (currStr === needle) {
            findIndex = i
            break;
        }
    }

    return findIndex
};

console.log(strStr("Giorgi Zankaidzgggg", "gggg"))


// const letters = 3
//
// const object = 'rgi'
//
// let string = 'Giorgi Zankaidze'
//
// string = string.slice(2, 2 + letters)
//
//
// console.log(string)



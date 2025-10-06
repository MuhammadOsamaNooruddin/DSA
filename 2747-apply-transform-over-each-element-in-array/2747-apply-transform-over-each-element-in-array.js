/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {

    if(arr.length <= 0)return arr;

    let res = [];
    arr.forEach((el,i) => {
        res.push(fn(el,i))
    })
    return res
};
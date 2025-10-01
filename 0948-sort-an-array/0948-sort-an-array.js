/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(arr) {
  if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = sortArray(arr.slice(0,mid))
    let right = sortArray(arr.slice(mid))

    return mergeSort(left,right)

};


function mergeSort(left,right){
    let sortedArr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) sortedArr.push(left.shift());
        else sortedArr.push(right.shift());
    }
    return [...sortedArr, ...left, ...right];
}
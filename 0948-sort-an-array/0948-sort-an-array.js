/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(arr) {
  if(arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = sortArray(arr.slice(0, mid));
  let right = sortArray(arr.slice(mid));

    return mergehelper(left,right);

};


function mergehelper(left,right){

    let result = [];
    let i=0;
    let j=0;

    while(i<left.length && j<right.length){
        if(left[i] < right[j]){
            result.push(left[i]);
            i++
        }else{
            result.push(right[j]);
            j++
        }
    }

    while(i < left.length){
        result.push(left[i]);
        i++
    }

    while(j < right.length){
        result.push(right[j]);
        j++
    }
    return result
}
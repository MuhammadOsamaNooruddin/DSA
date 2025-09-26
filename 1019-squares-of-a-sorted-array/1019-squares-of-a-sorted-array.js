/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {

    let arr= [];
    let left = 0;
    let right = nums.length - 1;

    for(let i=right; i>=0; i--){
        if(Math.abs(nums[left]) < Math.abs(nums[right])){
            arr[i] = nums[right] ** 2;
            right--;
        }else{
            arr[i] = nums[left] ** 2;
            left++;
        }
    }

    return arr
};
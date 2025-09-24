/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let left = 2;

    for(let right = 2; right < nums.length; right++){
        console.log(nums[right] ,nums[left])
        if(nums[right] > nums[left - 2]){
            nums[left] = nums[right];
            left++
        }
    }

    return left
    
};
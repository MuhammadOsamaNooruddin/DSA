/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    if(nums.length === 0 || nums.length === 1) return false

    let mySet = new Set();

    for(let i=0; i<nums.length; i++){
        if(mySet.has(nums[i])) return true;
        mySet.add(nums[i])
    }

    return false
};
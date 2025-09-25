/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    if(nums.length === 0) return false
    // if(nums.length === 1) return true

    let myMap = new Map();

    for(let i=0; i<nums.length; i++){
        if(myMap.has(nums[i])) return true;
        myMap.set(nums[i], 1)
    }

    return false

};
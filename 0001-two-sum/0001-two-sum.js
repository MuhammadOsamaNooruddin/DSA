/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let myMap = new Map();

    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];

        if(myMap.has(diff)){
            return [i,myMap.get(diff)];
        }
            myMap.set(nums[i],i)
        
    }
};
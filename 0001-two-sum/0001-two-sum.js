/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    if(!nums.length) return [];

    let myMap = new Map();

    for(let i = 0; i <nums.length; i++){
        let diff = target - nums[i];
        
        if(myMap.has(diff)){
            return [i, myMap.get(diff)]
        }else{
            myMap.set(nums[i],i)
        }
    }

    return []
}
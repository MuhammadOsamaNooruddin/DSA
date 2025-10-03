/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {

    if(nums.length === 0) return 0;

    let sum = 0;
    let count = 0;
    let myMap = new Map();
    myMap.set(0, 1);

    for(let i=0; i< nums.length; i++){

        sum += nums[i];
        let foundK = sum - k;

        if(myMap.has(foundK)){
           count += myMap.get(foundK);
        }

        myMap.set(sum, (myMap.get(sum) || 0) + 1);
        
    } 

    return count
    
};
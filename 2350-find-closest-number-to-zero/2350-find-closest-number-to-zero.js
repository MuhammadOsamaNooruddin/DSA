/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {

    let closestNum = nums[0];

   for(let i=1; i<nums.length; i++){
        let currNum = nums[i];

        let currDistance = Math.abs(currNum);
        let closestDistance = Math.abs(closestNum);

        if(currDistance < closestDistance){
            closestNum = currNum;
        }else if(currDistance === closestDistance){
            closestNum = Math.max(currNum, closestNum);
        }
    }
    
    return closestNum
};
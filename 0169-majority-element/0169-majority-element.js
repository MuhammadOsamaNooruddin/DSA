/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let candidate = nums[0];
    let count = 1;

    for(let i=1; i<nums.length; i++){
        if(nums[i] === candidate) count++;
        else if(count === 0){
            count++;
            candidate = nums[i]
        }else{
            count--
        }
    }

    return candidate
};

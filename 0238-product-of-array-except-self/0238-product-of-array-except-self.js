/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let prefix = 1;
    let postfix = 1;
    let output = [];

    for(let i=0;i<nums.length;i++){
      output[i] = prefix;
      prefix *= nums[i];
    }

    for(let i=nums.length -1; i>=0;i--){
        output[i] *= postfix;
        postfix *= nums[i];
    }

    return output

};
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {

    let firstNum = nums[0];
    let result = [];
    let left = 0;

    for(let i=1; i <= nums.length; i++){
        if(nums[i] === firstNum + 1){
            firstNum++;
        }else{
            if(left !== i -1){
                result.push(`${nums[left]}->${nums[i-1]}`);
            }else{
                result.push(`${nums[left]}`);
            }
            left = i;
            firstNum = nums[i]
        }
    }
    

    return result
};
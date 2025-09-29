/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {

    let left = 0;
    let right = 0;
    let minimum = Infinity;
    let sum = 0;

    while(right < nums.length){
        sum += nums[right];

        while(sum >= target){
            minimum = Math.min(minimum, right - left + 1);
            sum -= nums[left];
            left++;
        }

        right++
    }

    return minimum === Infinity ? 0 : minimum
    
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {

    if(!nums.length) return 0;
    if(k > nums.length) return 0;
    if(nums.length === 1) return nums[0]
    
    let left = 0;
    let right = 0;
    let sum = 0;
    let maxAvg = -Infinity;

    while(right < nums.length){

        sum += nums[right];

        if(right - left  + 1 === k){
            let avg = sum / k;
            maxAvg = Math.max(maxAvg,avg);
            sum -= nums[left];
            left++
        }
        right++

    }

    return maxAvg
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {

    if(!nums.length) return 0;
    
    let left = 0;
    let right = 0;
    let res = -Infinity;
    let sum = 0;

    while(right < nums.length){
        sum += nums[right];
        if(right - left + 1 === k){
            let avg = sum / k;
            res = Math.max(res, avg);
            sum -= nums[left];
            left++;
        }

        right++

    }

    return res

};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {

    let maxOnes = 0;
    let zeroCount = 0;
    let left = 0;

    for(let right=0; right<nums.length; right++){

        if(nums[right] === 0){
            zeroCount++;
        }

        while(zeroCount > k){
            if(nums[left] === 0) zeroCount--;
            left++
        }

        maxOnes = Math.max(maxOnes, right - left + 1);

    }

    return maxOnes
};
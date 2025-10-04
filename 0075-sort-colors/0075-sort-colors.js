/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

    if(nums.length === 0) return [];
    if(nums.length === 1) return nums;

    let freq = new Array(3).fill(0);

    for(let i=0; i<nums.length; i++){
        freq[nums[i]] = (freq[nums[i]] || 0) + 1;
    }

    let index = 0;
    for (let color = 0; color <= 2; color++) {
        for(let count = 0; count < freq[color]; count++){
            nums[index++] = color
        }
    }
    
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
    if(nums.length === 0)return 0;

    let newNum = new Set(nums);
    let longest = 0;

    for(let n of newNum){

        if(!newNum.has(n - 1)){
            let currentNum = n;
            let currentStreak = 1;

            while(newNum.has(currentNum + 1)){
                currentNum++;
                currentStreak++;
            }

            longest = Math.max(longest, currentStreak)
        }

    }

    return longest

};
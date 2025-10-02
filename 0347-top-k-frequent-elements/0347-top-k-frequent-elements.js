/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    let freq = {};

    for(let n of nums){
        freq[n] = (freq[n] || 0) + 1;
    }

    let sorted = Object.entries(freq).sort((a,b) => b[1] - a[1]);

    let res = [];
    for(let [key, value] of sorted){
        if(res.length !== k){
            res.push(Number(key))
        }else{
            break
        }
    }

    return res
    
};
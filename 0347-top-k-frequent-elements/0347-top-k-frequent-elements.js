/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    // O(n) Approach

    let freq = {};
    let bucket = [];
    let result = [];

    for(let n of nums){
        freq[n] = (freq[n] || 0) + 1;
    }

    for( let [key,value] of Object.entries(freq)){
        // console.log(key,value,bucket)
        if(bucket[value]){
            bucket[value].push(Number(key));
        }else{
            bucket[value] = [Number(key)]
        }

    }
    
    for(let i=bucket.length - 1; i >= 0; i--){
        if(result.length === k) break;
        if(bucket[i]){
            result.push(...bucket[i])
        }
    }
    
    return result

// -----------------------------------------
    // O(n log n) Approach

    // let freq = {};

    // for(let n of nums){
    //     freq[n] = (freq[n] || 0) + 1;
    // }

    // let sorted = Object.entries(freq).sort((a,b) => b[1] - a[1]);

    // let res = [];
    // for(let [key, value] of sorted){
    //     if(res.length !== k){
    //         res.push(Number(key))
    //     }else{
    //         break
    //     }
    // }

    // return res
    
};
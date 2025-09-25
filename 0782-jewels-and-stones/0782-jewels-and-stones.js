/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {

    if(!jewels || !stones) return 0

    let mySet = new Set(jewels)

    let count = 0;
    for(let i=0; i < stones.length; i++){
        if(mySet.has(stones[i])){
            count++
        }
    }

    return count

};
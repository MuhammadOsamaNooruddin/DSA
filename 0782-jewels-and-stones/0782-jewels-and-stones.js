/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {

    let mySet = new Set();
    let stonesHave = 0;

    for(let i=0; i< jewels.length; i++){
        mySet.add(jewels[i])
    }

    for(let s of stones){
        if(mySet.has(s)) stonesHave++
    }

    return stonesHave
}
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    if(!ransomNote || !magazine) return false;

    let myMap = new Map();

    for(let alphabet of ransomNote){
        myMap.set(alphabet, (myMap.get(alphabet) || 0 ) + 1);
    }

    let count = myMap.size;

    for(let i=0; i < magazine.length; i++){
        if(myMap.has(magazine[i])) myMap.set(magazine[i], myMap.get(magazine[i]) - 1 );
        if(myMap.get(magazine[i]) === 0 ) count--;
    }

    return count === 0
    
};
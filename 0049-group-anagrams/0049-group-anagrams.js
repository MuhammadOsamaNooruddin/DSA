/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    if(strs.length === 0) return [];

    let myMap = new Map();

    for(let str of strs){

        let count = new Array(26).fill(0);
        for(let s of str){
            let char = s.charCodeAt(0) - 97;
            count[char]++;
        }
        let key = count.join("#");
        if(!myMap.has(key)) myMap.set(key,[]);
        myMap.get(key).push(str)
    }

    return Array.from(myMap.values())

}
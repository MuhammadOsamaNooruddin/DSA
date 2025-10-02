/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    // let sorted = strs.map((str) => str.split("").sort().join(""));

    // let map = {};

    // for(let i=0; i < sorted.length; i++){
    //     if(!map[sorted[i]]){
    //         map[sorted[i]] = [strs[i]];
    //     }else{
    //         map[sorted[i]].push(strs[i])
    //     }
    // }

    // return Object.values(map)

    let map = {};

    for(let str of strs){

        let count = new Array(26).fill(0);

        for(let char of str){
            count[char.charCodeAt(0) - 97]++;
        }

        let key = count.join("#");

        if(map[key]){
            map[key].push(str);
        }else{
            map[key] = [str]
        }
        
    }

    return Object.values(map)

};

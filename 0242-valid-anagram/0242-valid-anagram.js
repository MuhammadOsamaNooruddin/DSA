/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   
   if(s.length !== t.length) return false;
   if(s === "" || t === "") return false;

    let myMap = new Map();

    for(let n of s){
        myMap.set(n, (myMap.get(n) || 0) + 1 )
    }

    for(let n of t){
        if(myMap.has(n)){
            myMap.set(n, myMap.get(n) - 1);
            if(myMap.get(n) === 0 ) myMap.delete(n)
        }else{
            return false
        }
    }

    return myMap.size > 0 ? false : true
};
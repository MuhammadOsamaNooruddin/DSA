/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {

    let freq = new Array(26).fill(0);

    for(let s of s1){
        freq[s.charCodeAt(0) - 97]++;
    }

    let window = new Array(26).fill(0);

    for(let i=0, j = 0 ; i< s2.length; i++){

        window[s2[i].charCodeAt(0) - 97]++;

        if( i - j + 1 > s1.length ){
            window[s2[j].charCodeAt(0) - 97]--;
            j++;
        }
        
        if(freq.toString() === window.toString()) return true

    }

    return false
};
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    let mySet = new Set();

    function getNextNumber(num){
        let sum = 0;

        while(num > 0){
            let digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum
    }

    while(n !== 1 && !mySet.has(n)){
        mySet.add(n);
        n = getNextNumber(n);
    }

    return n === 1
    
};
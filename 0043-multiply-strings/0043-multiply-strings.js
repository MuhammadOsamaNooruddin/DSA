/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    
    if(num1 === '0' || num2 === '0') return '0';

    let m = num1.length;
    let n = num2.length;
    let result = new Array(m + n).fill(0);

    for(let i = m - 1; i >=0; i--){

        let digit1 = num1[i].charCodeAt(0) - ("0").charCodeAt(0);

        for(let j = n - 1; j >= 0; j--){

            let digit2 = num2[j].charCodeAt(0) - ("0").charCodeAt(0);

            let sum = result[i + j + 1] + digit1 * digit2;
            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);

        }

    }

        let str = result.join("");
        let left = 0;
        while(left < str.length){
            if(str[left] !== '0') return str.slice(left);
            left++
        }


};
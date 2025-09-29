/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    
    let stack = [];
    let res = new Array(temperatures.length).fill(0);
    let j=0;

    for(let i=0; i<temperatures.length; i++){
       
       while(stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]){
            let index = stack.pop();
            res[index] = i - index;
       }

       stack.push(i);

    }

    return res

};
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {

    let stack  = [];
    let sum = 0;

    for(let op of operations){

        switch(op){
            case "D":
                let lastElement = stack[stack.length - 1] * 2;
                stack.push(lastElement);
                sum += lastElement;
                break;
            case "C":
                sum -= stack.pop();
                break;
            case "+":
                newElement = stack[stack.length - 1] + stack[stack.length - 2];
                stack.push(newElement);
                sum+= newElement;
                break;
            default:
                let currNum = parseInt(op);
                stack.push(currNum)
                sum += currNum;
        }

    }

    return sum
    
};
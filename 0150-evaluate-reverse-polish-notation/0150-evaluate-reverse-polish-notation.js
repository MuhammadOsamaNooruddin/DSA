/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

    let stack = [];

    for(let i=0; i<tokens.length; i++){
        let isNum = tokens[i];

            if(!isNaN(isNum)) stack.push(parseInt(tokens[i]));
            else{
                let num1 = stack.pop();
                let num2 = stack.pop();
                
                switch(isNum){
                    case "+":
                        stack.push(num2 + num1);
                    break;
                    case "-":
                        stack.push(num2 - num1);
                    break;
                    case "*":
                        stack.push(num2 * num1);
                    break;
                    case "/":
                        stack.push(Math.trunc(num2 / num1));
                    break;
                    default:
                        console.log("error")
                }
                
            }
    }


    return stack.pop()
    
};
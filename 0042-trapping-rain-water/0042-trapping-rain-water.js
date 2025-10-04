/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

    if(!height.length) return 0
    
    // O(N) time and space

    // let leftMax = [];
    // let rightMax = [];
    // let leftMaxCounter = 0;
    // let rightMaxCounter = 0;
    // let count = 0;

    // for(let i=0; i < height.length; i++){
    //     leftMax[i] = leftMaxCounter;
    //     leftMaxCounter = Math.max(leftMaxCounter, height[i]);
    // }

    // for(let i=height.length - 1; i>= 0; i--){
    //     rightMax[i] = rightMaxCounter;
    //     rightMaxCounter = Math.max(rightMaxCounter, height[i]);
    // }

    // for(let i=0; i < height.length; i++){
    //     count += Math.max(0, Math.min(leftMax[i],rightMax[i]) - height[i] )
    // }

    // return count

    // O(n) time and space O(1)

    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let water = 0;

    while(left <= right){

        if(height[left] < height[right]){
            if(height[left] > leftMax){
                leftMax = height[left]
            }else{
                water += leftMax - height[left]
            }
            left++;
        }else{
            if(height[right] > rightMax){
                rightMax = height[right]
            }else{
                water += rightMax - height[right]
            }
            right--
        }

    }
    return water
};
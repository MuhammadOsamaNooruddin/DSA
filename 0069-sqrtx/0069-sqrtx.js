/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

    if(x < 2) return x;

    let left = 1;
    let right = x;

    while(left <= right){

        let mid = Math.floor((left + right) / 2);

        let isSqrt = mid * mid;

        if(isSqrt > x){
            right = mid - 1;
        }else if(isSqrt < x){
            left = mid + 1;
        }else{
            return mid
        }
    console.log(left,mid,right)
    }
    
    return right
};
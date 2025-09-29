
var MinStack = function() {
    this.stack = []
    this.minstack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(this.minstack.length === 0){
        this.minstack.push(val);
    }else{
        this.minstack.push( Math.min(val, this.minstack[this.minstack.length -1]) )
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
   if(!this.stack.length) return;
   this.stack.pop();
   this.minstack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(!this.stack.length) return;
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    
    return this.minstack[this.minstack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
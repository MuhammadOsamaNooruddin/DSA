/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */
Function.prototype.callPolyfill = function(context, ...args) {

   if (typeof this !== "function") throw new Error("It is not callable.");

    let ctx = Object(context) || {};
    let key = Symbol();
    ctx[key] = this;
    let result = ctx[key](...args);
    delete ctx[key];
    return result


//   context.tempFunction = this;
//   let result = context.tempFunction(...args);
//   delete context.tempFunction;
//   return result;

}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */
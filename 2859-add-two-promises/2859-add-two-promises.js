/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    
    // return Promise.all([promise1,promise2]).then(([val1,val2]) => val1 + val2)
    let pro1 = await promise1;
    let pro2 = await promise2;
    return pro1 + pro2
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
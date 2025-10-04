/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve,reject) => {

        let result = [];
        let completed = 0;
        let rejected = false;

        functions.forEach((fn, index) => {

            fn().then((res) => {
                result[index] = res;
                completed++;

                if(completed === functions.length){
                    resolve(result);
                }

            }).catch((err) => {
                if(!rejected){
                    rejected = true;
                    reject(err)
                }
            })

        })

        if(functions.length === 0) resolve([])
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
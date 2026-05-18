

const promise = new Promise((resolve, reject) => {
    resolve(100);
    // reject(new Error('Something went wrong'));
});

promise
    .then((val) => {
        console.log(val);
    })
    .catch((err) => {
        console.log(err);
    })
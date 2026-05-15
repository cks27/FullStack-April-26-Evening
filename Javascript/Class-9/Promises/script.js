

// // 1. Creation of a promise
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(100);
//         // reject(new Error('some custom message'));
//     }, 2000);
// });

// // 2. Consuming the promise
// promise
//     .then(function (value) { // This is used to read the value of a promise if it moves to fullfilled state.
//         console.log(value);
//     })
//     .catch(function (err) {
//         console.log(err.message);
//     });

// --------------------------------------------------

console.log('START');

setTimeout(function callback() {
    console.log('Inside set timeout');
}, 0);

const promise = new Promise((resolve, reject) => {
    resolve('Hello from promise'); 
});

promise
    .then(function (val) {
        console.log(val);
    })

console.log('END');
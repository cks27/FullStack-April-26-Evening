

// const p1 = new Promise((resolve, reject) => {
//     resolve(123);
// });

// const p2 = Promise.resolve(123);

// const p3 = new Promise((resolve, reject) => {
//     reject(new Error('Something went wrong'));
// });

// const p4 = Promise.reject(new Error('something went wrong again!'));

// p1.then((val) => {
//     console.log(val);
// });

// p2.then((val) => {
//     console.log(val);
// });

// p3.catch((err) => {
//     console.log(err);
// });

// p4.catch((err) => {
//     console.log(err);
// });


// const p5 = Promise.resolve(100);

// const p6 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(200);
//         // reject(new Error('Something went wrong!'));
//     }, 200);
// });

// const p7 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(300);
//     }, 100);
// });

// // p5 && p6 && p7 => resolved

// // Promise.all([p5, p6, p7])
// //     .then((values) => {
// //         console.log(values);
// //     })
// //     .catch((err) => {
// //         console.log(err.message);
// //     });

// // p5 || p6 || p7

// Promise.any([p6, p7])
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((err) => {
//         console.log(err);
//     })






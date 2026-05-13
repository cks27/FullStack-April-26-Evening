// -------------------------------------------Async Programming : Event Loop and Callbacks------
// console.log('START');

// // function apiCall(func, delay) {
// //     console.log('API call started');
// //     // 2 sec
// //     const currTS = new Date().getTime();
// //     // 0+1000
// //     // 0
// //     // 1
// //     // 2
// //     // 3
// //     //..1000.
// //     // This loop will be executed for 1 sec.
// //     while (new Date().getTime() < currTS + delay * 1000){}

// //     func();
// // }

// function callback() {
//     console.log('API Call completed');
// }

// // apiCall(callback, 5);
// setTimeout(callback, 5000);

// console.log('END');

// --------------------------------------Question 1----------


// console.log('START');

// setTimeout(function cb() {
//     console.log('Inside callback')
// }, 2000);

// let i = 100;

// while (i < 150) {
//     console.log(i);
//     i = i - 10;
// }

// console.log('END');

// Conclusion 
// 1. Starvation of callback queue
// 2. setTimeout has trust issues.


// ----------------------------------------Question 2---------------

// console.log('START');

// setTimeout(function cb1() {
//     console.log('Inside cb1');
// }, 1000);

// setTimeout(function cb2() {
//     console.log('Inside cb2');
// }, 2000);

// console.log('END');

// ------------------------------------------ Question 3 -------

console.log('START');

setTimeout(function cb() {
    console.log('Inside cb');
}, 0);

console.log('END');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');
console.log('END 1');



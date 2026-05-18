const fs = require('node:fs');
const fsp = require('node:fs/promises');


// Callback way of reading a file
// fs.readFile('abc.txt', (err1, data1) => {
//     if (err1) {
//         throw err1;
//     }
//     console.log(data1.toString());

//     fs.readFile('def.txt', (err2, data2) => {
//         if (err2) {
//             throw err2;
//         }
//         console.log(data2.toString());
//     })
// });

// ------------------Sync------
// console.log('START');

// const data1 = fs.readFileSync('abc.txt');
// const data2 = fs.readFileSync('def.txt');

// console.log(data1.toString());
// console.log(data2.toString());

// console.log('END');

// ------------------Promises APIs

console.log('START');

const promise1 = fsp.readFile('abc.txt');

promise1
    .then((data1) => {
        console.log(data1.toString());
        return fsp.readFile('def.txt');
    })
    .then((data2) => {
        console.log(data2.toString());
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('Inside finally');
    })

console.log('END');
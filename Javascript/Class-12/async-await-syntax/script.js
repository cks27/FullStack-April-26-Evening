
// ----------------async keyword------------

// Creation of the promise.
async function sum(x, y) {
    if (x + y > 10) {
        throw new Error("sum of numbers is greater than 10");
    }
    return x + y;
}

// function sum1(x, y) {
//     return new Promise((resolve, reject) => {
//         if (x + y > 10) {
//             reject(new Error("sum of numbers is greater than 10"));
//         } else {
//             resolve(x + y);
//         }
//     })
// }

// async function fun() {
//     console.log('Inside fun');
// }


// --------------------- await-------------


// sum(5, 3)
//     .then((val) => {
//         console.log(val);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// async function main() {
//     try {
//         const p = sum(5, 10);
//         console.log(p);
//         const val = await p;
//         console.log(val);
//     }
//     catch (err) {
//         console.log(err);
//         throw err;
//     }
// }

// main();

console.log('START');

async function fun() {
    console.log('Started executing fun functions');

    const val1 = await sum(2, 3);
    
    console.log(`sum of 2 and 3 is ${val1}`);

    console.log('starting to calculate sum of 4,5');

    const val2 = await sum(4, 5);

    console.log(`Sum of 4, 5 is ${val2}`);
}

fun();

console.log('END');
console.log('After END 1');
console.log('After END 2');
console.log('After END 3');
console.log('After END 4');
console.log('After END 5');
console.log('After END 6');

// ...1000's of lines.
console.log('After END 7');

sum(2, 3)
    .then((val1) => {
        console.log(val1);
        return sum(4, 5);
    })
    .then((val2) => {
        console.log(val2);
    })
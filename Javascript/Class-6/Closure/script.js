
// ---------------------------------Lexical Environment-------------
// let name = 'Sarah';

// function sayName() {
//     console.log(name);
// }

// function print() {
//     let name = 'Max';
//     console.log(name);
//     sayName();
// }

// print();

// var varName = 10;
// function b() {
//     console.log( varName);
// }
// function fn() {
//     var varName = 20;
//     b();
//     console.log(varName);
// }
// fn();

// 10
// 20


// -------------------------------------------

function fun() {
    let a = 100;

    function innerFun() {
        a++;
        console.log(a);
    }

    return innerFun;
}



const f = fun(); //{ innerFun: function() { } , closure:{a: 100}  }

// f();  //{ innerFun: function() { } , closure:{a: 101}  }
// f();  //{ innerFun: function() { } , closure:{a: 102}  }
// f(); //{ innerFun: function() { } , closure:{a: 103}  }
// f(); //{ innerFun: function() { } , closure:{a: 104}  }

// const func = fun(); //{ innerFun: function() { } , closure:{a: 100}  }

// func(); //{ innerFun: function() { } , closure:{a: 101}  }




// -----------------------------------

function counter() {
    let count = 0;

    // APIs - Application Programme Interface
    function increment() {
        count++;
        return count;
    }

    function decrement() {
        count--;
        return count;
    }

    function print() {
        console.log(count);
    }

    return {
        increment,
        decrement,
        print
    }
}

const c1 = counter();


// -----------------------------------------------------

function outer() {
    const arrFn = [];
    for (let i = 0; i <= 2; i++) { //
        arrFn.push(function fn() {
            console.log(i);
        })
    }
    return arrFn;
}
let arrFn = outer();

// console.log(arrFn);
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();


// --------------------------------------------Memoized Functions ------------------- 

function calc(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++){
        sum += 1;
    }
    return sum;
}

function memoize(fn) {
    const cache = new Map();
    return function (n) {
        if (cache.has(n)) {
            return cache.get(n);
        }
        // if there is a cache miss
        const newVal = fn(n);
        cache.set(n, newVal);
        return newVal;
    }
}


// console.time('timer 1');
// console.log(calc(100000));
// console.timeEnd('timer 1')
// // 1000.. lines

// console.time('timer 2');
// console.log(calc(100000));
// console.timeEnd('timer 2');

const memoizedCalc = memoize(calc);

console.time('timer 1');
console.log(memoizedCalc(100000));
console.timeEnd('timer 1')
// 1000.. lines

console.time('timer 2');
console.log(memoizedCalc(100000));
console.timeEnd('timer 2');
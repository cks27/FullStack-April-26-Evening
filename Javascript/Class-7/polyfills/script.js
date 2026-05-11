

function fun(a, b) {
    console.log(a + b);
    console.log(this);
    return 100;
}

const car = {
    name: 'BMW',
    price: 1000
}

// fun();
// fun.call(car, 10, 20);

Function.prototype.myCall = function (customObj, ...args) {
    // console.log(customObj);
    // console.log(args);
    // console.log(this);

    customObj.__fn__ = this;
    const res = customObj.__fn__(...args); // this is equivalent to car.fun();
    delete customObj.__fn__;
    return res;
}


console.log(fun.myCall(car, 4, 5));


const obj = {
    a: 10, 
    b:true
}

function sum(x, y) {
    return x + y;
}

sum.myCall(obj, 2, 3);

// ----------------------------Bind-----------------

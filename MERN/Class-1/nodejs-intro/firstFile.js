console.log('Hello World');


class Car{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const c1 = new Car("BMW", 1000);

console.log(c1);

function fun() {
    console.log('Inside fun');
}

fun();

async function sum(x,y) {
    return x + y;
}

function main() {
    sum(10, 20)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
}

main()
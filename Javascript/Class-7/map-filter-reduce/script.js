// ---------------------------- map---------------

const nums = [1, 2, 3, 4, 5, 6];

function square(num) {
    return num ** 2;
}

function squareRoot(num) {
    return Math.sqrt(num);
}

// [1, 4, 9, 16, 25, 36]
const squareOfNums = nums.map(square);
// const sqrtOfNums = nums.map(function (num) {
//     return Math.sqrt(num);
// });

// const sqrtOfNums = nums.map((num)=> Math.sqrt(num));

// ------------------------filter------------

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isEven(num) {
    return num % 2 === 0;
}

const res = arr.filter(isEven);

/*
    Use the above `isEven` method to filter out odd number.
*/

// const oddNums = arr.filter(function (num) {
//     if (isEven(num)) {
//         // if even then, we want to skip the num
//         return false;
//     }
//     return true;
// })

// const oddNums = arr.filter((num) => {
//     return !isEven(num);
// });


const oddNums = arr.filter((num) => !isEven(num));

// ---------------------------------------menu filter program

// chicken, egg, onion, garlic
const menu = [
    "Chicken Biryani",
    "Egg Curry",
    "Onion Rings",
    "Tandoor Chicken",
    "Onion Pizza",
    "Garlic Bread",
    "Burger",
    "Dal Makhani",
    "Egg Omlette",
    "Garlic Naan",
    "Masala Dosa",
    "Egg rolls",
    "Garlic Daal",
    "Chicken Garlic Rice",
    "Butter Chicken",
    "Kadhai Paneer",
    "Garlic Noodles"
]

// We have to create 2 menus
// VegMenu => item should not contain chicken and egg.
// JainMenu => veg and should be onion garlic free

function isVeg(dish) {
    if (dish.toLowerCase().includes("chicken") || dish.toLowerCase().includes("egg")) {
        return false;
    }
    return true;
}

function isOnionGarlicFree(dish) {
    if (dish.toLowerCase().includes("onion") || dish.toLowerCase().includes("garlic")) {
        return false;
    }
    return true;
}

const vegMenu = menu.filter(isVeg);

// We can do any one of these:-
// const jainMenu = vegMenu.filter(isOnionGarlicFree); 
const jainMenu = menu.filter(isVeg).filter(isOnionGarlicFree);

const nonVegMenu = menu.filter((dish) => !isVeg(dish));

// console.log(menu);
// console.log(vegMenu);
// console.log(jainMenu);
// console.log(nonVegMenu);

// --------------------------------- reduce -----------------

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// acc = 55
const sum = numbers.reduce(function (acc, curr) {
    return acc + curr;
}, 0);


//acc =1
const sum1 = numbers.reduce(function (acc, curr) {
    return acc + curr;
});


const nestedArr = [[1, 2, 3], ['blue', 'red', 'green'], [100, 200, 300, 400, 500]];

// output -> [1,2,3,'blue', 'red', 'green', 100, 200, 300, 400, 500];

// acc=[1,2,3,'blue', 'red', 'green', 100, 200, 300, 400, 500]
const flattanedArr = nestedArr.reduce((acc, curr) => acc.concat(curr), []);

const cart = [
    {
        name: 'Iphone 11',
        qty: 5,
        price: 100.5
    },
    {
        name: 'Macbook Air',
        qty: 3,
        price: 200.2
    },
    {
        name: 'Shirt',
        qty: 2,
        price: 10.9
    },
];

const totalAmount = cart.reduce((acc, curr) => acc + curr.price*curr.qty, 0);














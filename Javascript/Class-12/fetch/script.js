

// fetch('https://fakestoreapi.com/products/1')
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data.title);
//     });

// async function main() {
//     const res = await fetch('https://fakestoreapi.com/products/1');
//     const data = await res.json();
//     console.log(data.title);
// }

// main();

// ------------------------ Fetch products with id 1, 2, 3, and 4.

async function fetchProduct(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data;
}

async function main() {
    console.time('t1');
    // ------------------------ series execution of fetchProduct--------
    // const p1 = await fetchProduct(1);
    // const p2 = await fetchProduct(2);
    // const p3 = await fetchProduct(3);
    // const p4 = await fetchProduct(4);

    // console.log(p1.title);
    // console.log(p2.title);
    // console.log(p3.title);
    // console.log(p4.title);

    // -------------------------series execution ends--------------
    
    console.timeEnd('t1');
}

// main();


async function mainParallel() {
    console.time('t1');
    const p1 = fetchProduct(1);
    const p2 = fetchProduct(2);
    const p3 = fetchProduct(3);
    const p4 = fetchProduct(4);

    const results = await Promise.all([p1, p2, p3, p4])
    console.timeEnd('t1');
}

mainParallel();



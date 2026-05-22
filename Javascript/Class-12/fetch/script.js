

// fetch('https://fakestoreapi.com/products/1')
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data.title);
//     });

async function main() {
    const res = await fetch('https://fakestoreapi.com/products/1');
    const data = await res.json();
    console.log(data.title);
}

main();



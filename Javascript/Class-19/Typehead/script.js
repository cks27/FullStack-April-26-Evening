const resultsSection = document.getElementById('results');
const input = document.querySelector('#container input');

function render(products, query) {
    resultsSection.innerHTML = '';

    // when products array is empty.
    if (products.length===0 && query.length!==0) {
        const p = document.createElement('p');
        p.innerText = 'No results found';
        resultsSection.append(p);
        return;
    }

    for (let product of products) {
        // create a container to hold the information such as image, title etc.
        const div = document.createElement('div');
        const img = document.createElement('img');
        const h4 = document.createElement('h4');
        img.setAttribute('src', product.thumbnail);
        img.setAttribute('width', '70px');
        h4.innerText = product.title;
        div.classList.add('result-card');

        div.append(img);
        div.append(h4);
        resultsSection.append(div);
    }
}

async function fetchProducts(query) {
    const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const data = await res.json();
    return data;
}

async function searchProducts(query) {
    const data = await fetchProducts(query);
    render(data.products, query);
}

input.addEventListener('keyup', function () {
    const query = input.value;
    // if input query is empty string then do not do anything.
    if (query.trim().length === 0) {
        render([], "");
        return;
    }
    searchProducts(query);
})
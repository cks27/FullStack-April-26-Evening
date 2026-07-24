export async function fetchProducts() {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    return data;
}

export async function fetchProductById() {
    const res = await fetch('https://fakestoreapi.com/products/3');
    const data = await res.json();
    return data;
}
     
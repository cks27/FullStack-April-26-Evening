import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Product from './Product';

async function fetchProducts() {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    return data;
}

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function makeApiCall() {
            try {
                const data = await fetchProducts();
                setProducts(data.products);
                setIsLoading(false);
            }
            catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        }
        makeApiCall()
    }, []);

    return (
        <section>
            {isLoading && <h4>Loading Products</h4>}
            {error && <p>{ error }</p>}
            {products.length && <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {
                    products.map((product) => {
                        return <Product key={product.id} product={product} />
                    })
                }
            </div>}
        </section>

    )
}

export default ProductList
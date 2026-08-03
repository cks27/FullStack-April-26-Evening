import React, { useEffect, useState } from 'react'
import { fetchProductById, fetchProducts } from '../lib/apis'
import useHttp from '../hooks/useHttp';
   

const Products = () => {

    const { data, isLoading, error, sendRequest } = useHttp(fetchProducts, true);
    const { data: singleProduct, sendRequest: sendSingleProductReq } = useHttp(fetchProductById, true);
    
    useEffect(() => {
        sendRequest();
        sendSingleProductReq();
    }, [])

    return (
        <div >
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {data && data.products.length && data.products.map((product) => {
                return <figure style={{border:'2px solid #ccc', padding:'1rem'}} key={product.id}>
                    <figcaption>
                        <h2>{product.title}</h2>
                        <h3>Price: { product.price }</h3>
                    </figcaption>
                </figure>
            })}
        </div>
    )
}

export default Products
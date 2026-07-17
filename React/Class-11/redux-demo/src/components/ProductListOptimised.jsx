import React, { act } from 'react'
import { useState, useReducer } from 'react'
import { useEffect } from 'react'
import Product from './Product';

async function fetchProducts() {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    return data;
}


// action - defines what has happened.
// reducer - simply update the state basis the action recieved and return new state
function httpReducer(state, action) {
    if (action.type === 'PENDING') {
        return {
            products: [],
            error: null,
            isLoading: true
        }
    }

    if (action.type === 'SUCCESS') {
        return {
            products: action.payload,
            error: null,
            isLoading: false
        }
    }

    if (action.type === 'ERROR') {
        return {
            products: [],
            error: action.error,
            isLoading: false
        }
    }

    throw new Error('Invalid Action type!');
}

const ProductListOptimised = () => {

    const [productsState, dispatch] = useReducer(httpReducer, {
        products: [],
        isLoading: true,
        error: null
    });

    useEffect(() => {
        async function makeApiCall() {
            try {
                dispatch({ type: 'PENDING' });
                const data = await fetchProducts();
                dispatch({ type: 'SUCCESS', payload: data.products});
            }
            catch (err) {
                dispatch({type: 'ERROR', error: err.message})
            }
        }
        makeApiCall()
    }, []);

    return (
        <section>
            {productsState.isLoading && <h4>Loading Products</h4>}
            {productsState.error && <p>{ productsState.error }</p>}
            {productsState.products.length && <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {
                    productsState.products.map((product) => {
                        return <Product key={product.id} product={product} />
                    })
                }
            </div>}
        </section>

    )
}

export default ProductListOptimised
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/productSlice';
import Product from './Product';

const ProductList = () => {

    const productsState = useSelector((store) => store.productsState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts(10))
    }, []);

    return (
        <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
            {productsState.isLoading && <p>Loading....</p>}
            {productsState.error && <p>{productsState.error.message}</p>}
            {productsState.products.length && 
                productsState.products.map((product) => {
                    return <Product key={  product.id} product={product}/>
                })
            }
        </div>
    )
}

export default ProductList
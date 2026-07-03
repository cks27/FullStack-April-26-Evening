import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../components/Product';
import axios from 'axios';

const AllProducts = () => {

  const [products, setProducts] = useState([]);

  // We just want to fetch after the first render.
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((res) => {
        setProducts(res.data.products);
      });
  },[]);

  return (
    <div>
      <h1>All Products Page</h1>
      <section>
        {
          products.map((product) => {
            return <Product product={product} key={ product.id } />
          })
        }
      </section>
    </div>
  )
}

export default AllProducts
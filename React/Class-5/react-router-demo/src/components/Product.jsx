import React from 'react'

const Product = ({product}) => {
  return (
      <figure className='product'>
          <img width={200} src={product.thumbnail} alt="" />
          <figcaption>
              <h3>Name: { product.title }</h3>
              <h4>Price: { product.price }</h4>
              <p>{ product.description}</p>
          </figcaption>
    </figure>
  )
}

export default Product
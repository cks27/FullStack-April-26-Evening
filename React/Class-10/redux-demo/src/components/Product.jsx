import React from 'react'

const Product = ({product}) => {
  return (
      <figure style={{border:'2px solid #ccc', width:'200px'}}>
          <img width={150} src={product.thumbnail} alt="" />
          <figcaption>
              <h3>{ product.title }</h3>
              <h3>{ product.price }</h3>
          </figcaption>
    </figure>
  )
}

export default Product
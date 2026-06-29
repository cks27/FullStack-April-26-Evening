import React, {useState} from 'react'

const Product = (props) => {

    const [name, setName] = useState(props.name);
    
    const productClickHandler = () => {
        setName('Anonymous');
    }

    return (
        <article onClick={productClickHandler} className='product'>
            <h4>Name: {name}</h4>
            <h5>Price: {props.price}</h5>
            <p>This is some random product description</p>
        </article>
    )
}

export default Product;
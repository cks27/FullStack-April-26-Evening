import React, { useState } from 'react'

const User = (props) => {

    const [isEmailVisible, setIsEmailVisible] = useState(true);

    const toggleEmailVisibilityHandler = () => {
        setIsEmailVisible(!isEmailVisible);
    }

    return (
        <figure className='card'>
            <img src={props.picture} alt="" />
            <figcaption>
                <h3>Name : {props.name}</h3>
                <h3>Age: {props.age < 18 ? 'Minor' : 'Adult'}</h3>
                {isEmailVisible && <h3>Email: {props.email}</h3>}
                <h4>Localtion: {props.location}</h4>
                <button onClick={toggleEmailVisibilityHandler}>Toggle Email</button>
            </figcaption>
        </figure>
    )
}

export default User
import React from 'react'
import { useRef } from 'react'

const Demo = () => {

    const inputRef = useRef(null);

    const submitButtonHandler = () => {
        console.log(inputRef.current.value)
    }

    const triggerFocusHandler = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <input type="text" ref={inputRef} placeholder='Enter the input' />
            <button onClick={submitButtonHandler}>Submit</button>
            <button onClick={triggerFocusHandler}>Focus</button>
        </div>
    )
}

export default Demo
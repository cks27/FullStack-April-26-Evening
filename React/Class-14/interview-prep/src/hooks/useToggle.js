import React, { useState } from 'react'

const useToggle = (initialVal=true) => {
    const [toggle, setToggle] = useState(initialVal);

    const swithToggle = () => {
        setToggle(!toggle);
    }

    return [toggle, swithToggle]
}

export default useToggle
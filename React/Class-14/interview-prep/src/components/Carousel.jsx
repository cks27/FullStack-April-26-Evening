import React, { useEffect, useState } from 'react'

const Carousel = () => {

    const images = [
        {
            id: 0,
            title: "Title 1",
            description: "This is some description 1",
            imageUrl: "https://plus.unsplash.com/premium_photo-1750317244158-549f58a80dbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 1,
            title: "Title 2",
            description: "This is some description 2",
            imageUrl: "https://images.unsplash.com/photo-1783081312236-82cc1126d761?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 2,
            title: "Title 3",
            description: "This is some description 3",
            imageUrl: "https://images.unsplash.com/photo-1782215670710-8d2675bc0fbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"
        }
    ];

    const [currIdx, setCurrIdx] = useState(0);


    const moveToNext = () => {
        setCurrIdx((prevState) => {
            // we are already at last index, hence reset to 0.
            if (prevState === images.length - 1) {
                return 0;
            }
            return prevState + 1;
        });
    }


    useEffect(() => {
        const id  = setInterval(() => {
            moveToNext()
        }, 1000);

        return () => {
            clearInterval(id);
        }
    }, []);

    return (
        <div>
            <img src={images[currIdx].imageUrl} alt="" />
            <h2>{images[currIdx].title}</h2>
            <p>{images[currIdx].description}</p>
            <button onClick={moveToNext}>Next</button>
        </div>
    )
}

export default Carousel
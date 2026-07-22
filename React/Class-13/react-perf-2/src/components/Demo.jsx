import React,{memo} from 'react'

const Demo = memo(() => {
    console.log('demo - rendered')
    return (
        <h2>Demo</h2>
    )
})

export default Demo
import React from 'react'

const withGreeting = (Component) => {
    
    return function EnhancedComponent(props){
        return <div>
            <h2>Hello From 👋</h2>
            <Component {...props} />
        </div>
    }
}

export default withGreeting
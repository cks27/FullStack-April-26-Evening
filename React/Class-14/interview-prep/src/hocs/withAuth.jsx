import React from 'react'

/*

When Should You Use an HOC?
    Use an HOC when you need to:
        - Add common behavior (e.g. logging, loading, error handling)
        - Wrap many components with the same logic
        - Separate logic from presentation

Important Notes
    - HOCs are just patterns, not React features.
    - They do not modify the original component — they wrap it.
    - HOCs can become complex when nested — use them wisely.
*/


const withAuth = (Component) => {
    return function EnhancedComponent(props) {
        const isLoggedIn = false;
        
        if (!isLoggedIn) {
            return <p>Please login to continue..</p>
        }

        return <Component {...props} />
    }
}

export default withAuth
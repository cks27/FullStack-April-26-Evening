import React from 'react'

const Card = (props) => {
   
  return (
      <div>
          <h2>Card: { props.title }</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ex, laudantium, cumque consequatur quasi ipsam nisi blanditiis quis magnam enim tempora facere unde rem iure ipsum dolorum similique, eius molestiae!</p>
          Age:  {props.age}
          <div>
              {props.children}
          </div>
      </div>
  )
}

export default Card
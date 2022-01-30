import React from 'react'
import logo from './logo.svg'

// function POPOSSpace() {
    // <div>
    //   <img src={`${process.env.PUBLIC_URL}images/50-california-st.jpg`}
    //     width="300"
    //     height="300"
    //     alt="Hello" />
    //   <h1>Name...</h1>
    //   <div>Address...</div>
    // </div>

function POPOSSpace(props) {
  const { name, image, address } = props
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}images/${image}`}
        width="300"
        height="300"
        alt="Hello" />
      <h1>{name}</h1>
      <div>{address}</div>
    </div>
  )
}

export default POPOSSpace
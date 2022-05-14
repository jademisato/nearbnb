import React from 'react'
// import logo from './logo.svg'
import './POPOSSpace.css';
import { Link } from 'react-router-dom'

function POPOSSpace(props) {
  const { name, image, address, hours, id } = props
  // console.log("space")
  // console.log(props)
  // console.log("space")

  return (
    <div>
      <Link to={`/details/${id}`}>
        <img src={image} width="300" height="300" alt="image" />
      </Link>
      <h1>
        <Link to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <div>{address}</div>
      <div>{hours}</div>
      <div>{id}</div>
    </div>
  )
}

export default POPOSSpace
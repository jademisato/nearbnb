import React from 'react'
import './POPOSSpace.css';
import { Link } from 'react-router-dom'

function POPOSSpace(props) {
  const { name, image, address, hours, id } = props

  return (
    <div className="POPOSSpace">
      <Link to={`/details/${id}`}>
        <img src={image} width="300" height="300" alt="image" />
      </Link>
      <h1>
        <Link
          className="POPOSSpace-title"
          to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <div className="POPOSSpace-info">
        <div>{address}</div>
        <div>{hours}</div>
      </div>
    </div>
  )
}

export default POPOSSpace
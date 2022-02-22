import React from 'react'

import data from '../sfpopos-data.json';
import { useParams } from "react-router-dom"

function POPOSDetails(props) {
  let params = useParams()
  const { poposdetailsId } = params
  const { images, title, desc, hours, features, geo } = data[poposdetailsId]  

  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} />
      </div>

      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
        <p>{hours}</p>
        <p>{features}</p>
        <p>{geo.lat} {geo.lon}</p>
      </div>

    </div>
  )
}

export default POPOSDetails
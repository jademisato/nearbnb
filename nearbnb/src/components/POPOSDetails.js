import React from 'react';
import db from "../firebase"
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import './POPOSDetails.css'

function POPOSDetails(props) {
  let params = useParams()
  const { poposdetailsId } = params

  const [place, setPlace] = useState({})

  useEffect(() => {
    const fetchPlace = async () => {
      const placeRef = doc(db, 'places', poposdetailsId);
      const docSnap = await getDoc(placeRef);
      const place = docSnap.data();

      setPlace(place);
      console.log(place);
    }

    fetchPlace();
  }, [])
  
  return (
    <div className="POPOSDetails">
      <div className="POPOSDetails-image">
        <img src={place.imgURL} />
        {/* <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} /> */}
      </div>
      <div className="POPOSDetails-info">
        <h1 className="POPOSDetails-title">{place.title}</h1>
        <p className="POPOSDetails-desc">{place.desc}</p>
        <p className="POPOSDetails-hours">{place.hours}</p>
        <p className="POPOSDetails-features">{place.features}</p>
        {/* <p>{geo.lat} {geo.lon}</p> */}
      </div>
    </div>
  )
}

export default POPOSDetails
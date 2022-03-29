import { onSnapshot, collection, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react";
import db from "../firebase"
import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
// import data from '../sfpopos-data.json';

function POPOSList() {
  const [places, setPlaces] = useState([{ name: "Loading...", id: "initial" }]);
  console.log(places);
  useEffect(
    () =>
      onSnapshot(collection(db, "places"), (snapshot) =>
        setPlaces(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  const spaces = places.map(({ title, address, images, hours, id }, i) => {
    return (
      <POPOSSpace
        id={i}
        key={id}
        name={title}
        address={address}
        // image={images[0]}
        hours={hours}
      />
    )
  })

  return (
    <div className="POPOSList">
      {spaces}
    </div>
  )
}

export default POPOSList
import { onSnapshot, collection, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react";
import db from "../firebase"
import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
// import data from '../sfpopos-data.json';

function POPOSList() {
  const [places, setPlaces] = useState([{ name: "Loading...", id: "initial" }]);
  // console.log(places);
  useEffect(
    () =>
      onSnapshot(collection(db, "places"), (snapshot) =>
        setPlaces(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  const spaces = places.map(({ title, address, imgURL, hours, id }, i) => {
    return (
      <POPOSSpace
        id={id}
        key={id}
        name={title}
        address={address}
        image = {imgURL}
        // image={image[0]}
        hours={hours}
      />
    )
  })

  return (
    <div>
      <div className="search-form">
        <form>
          <input
            value={query}
            placeholder="search"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="POPOSList">
        {spaces}
      </div>
    </div>
  )
}

export default POPOSList
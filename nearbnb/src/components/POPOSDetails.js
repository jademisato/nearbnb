import db from "../firebase"
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

function POPOSDetails(props) {
  let params = useParams()
  const { poposdetailsId } = params
  // const { images, title, desc, hours, features, geo } = data[poposdetailsId]  
  // console.log(params);

  const [place, setPlace] = useState({})

  useEffect(() => {
    const fetchPlace = async () => {
      const placeRef = doc(db, "places", "isFpJxQ9TX94NC0aWecR");
      const docSnap = await getDoc(placeRef);
      const place = docSnap.data();

      setPlace(place);
      console.log(place);
    }

    fetchPlace();
  }, [])
  
  return (
    <div>
      <div>
        <img src={place.imgURL} />
        {/* <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} /> */}
      </div>
      <div>
        <h1>{place.title}</h1>
        <p>{place.desc}</p>
        <p>{place.hours}</p>
        <p>{place.features}</p>
        {/* <p>{geo.lat} {geo.lon}</p> */}
      </div>
    </div>
  )
}

export default POPOSDetails
import { onSnapshot, collection } from "firebase/firestore"
import db from "../firebase"
import { query, where } from "firebase/firestore";


const Dot = ({ color }) => {
  const style = {
    height: 25,
    width: 25,
    margin: "0px 10px",
    backgroundColor: color,
    borderRadius: "50%",
    display: "inline-block"
  }
  return <span style={style}></span>
}

export default function App() {

  const q = query(collection(db, "colors"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const cities = [];
    querySnapshot.forEach((doc) => {
      cities.push(doc.data().name);
    });
    console.log(q);
    console.log(cities);
  });
  return (
    <div>
      <button>New</button>
      <ul>
        <li>
          <a href="#">edit</a> <Dot color="#f00" /> Red
        </li>
        <li>
          <a href="#">edit</a> <Dot color="#0f0" /> Green
        </li>
        <li>
          <a href="#">edit</a> <Dot color="#00f" /> blue
        </li>
      </ul>
    </div>
  );
}
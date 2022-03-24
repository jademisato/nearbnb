import { onSnapshot, collection, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react";
import db from "../firebase"
import Dot from "./logicism/Dot";
import { handleNew, handleEdit, handleDelete, handleQueryDelete } from "./logicism/util";

export default function App() {
  const [colors, setColors] = useState([{name: "Loading...", id: "initial"}]);

  useEffect(() => {
    const collectionRef = collection(db, "colors");
    const q = query(collectionRef, orderBy("timestamp", "desc"));

    const unsub = onSnapshot(q, (snapshot) =>
      setColors(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );

    return unsub;
  },[]);

  return (
    <div>
      <button onClick={handleNew}>New</button>
      <button onClick={handleQueryDelete}>Query Delete</button>
      <ul>
        {colors.map((color) => (
          <li key={color.id}>
            <button href="#" onClick={() => handleEdit(color.id)}>edit</button>
            <button href="#" onClick={() => handleDelete(color.id)}>delete</button>
            <Dot color={color.value} /> {color.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
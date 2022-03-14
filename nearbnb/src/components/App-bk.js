// import logo from './logo.svg';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';
import Footer from './Footer';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About'
import POPOSDetails from './POPOSDetails'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';


// TODO: ↓cut out firebase connection information to firebase.js later ------------------
// import firebase from "firebase";
import "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8RtusJ6znoD77R8dGCx6WZizN8ONoJiY",
  authDomain: "nearbnb-31341.firebaseapp.com",
  projectId: "nearbnb-31341",
  storageBucket: "nearbnb-31341.appspot.com",
  messagingSenderId: "626902569388",
  appId: "1:626902569388:web:84a1353cd14f6544366a09",
  measurementId: "G-9QQK6LL30M"
};

firebase.initializeApp(firebaseConfig)

const app = initializeApp(firebaseConfig);
// firebase.initializeApp(config);
var db = firebase.firestore();

// export default firebase

// TODO: END ----------------------------------------------------------

function App() {

  const ref = firebase.firestore().collection("places")
  console.log(ref);
  
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

        <Title />
          <Routes>
          <Route exact path="/" element={<POPOSList />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:poposdetailsId" element={< POPOSDetails />} />
          </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;

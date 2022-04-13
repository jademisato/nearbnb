// import logo from './logo.svg';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';
import Footer from './Footer';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About'
import POPOSDetails from './POPOSDetails'
import { storage } from "../firebase"
import { getStorage, ref, getDownloadURL } from "firebase/storage"

function App() {

  // TODO: ↓ Fix connnect to cloud storage late(Installing gsutil again for solve CORS "https://cloud.google.com/storage/docs/gsutil_install", i didn't commit google-cloud-sdk because over 100MB.)
  const storage = getStorage();
  const spaceRef = ref(storage, 'test/shika.jpeg');

  // nullRef is null, since the parent of root is null
  const nullRef = spaceRef.root.parent;

  console.log("↓spaceRef");
  console.log(spaceRef);
  console.log("↑spaceRef");

  //Download
  getDownloadURL(spaceRef)
    .then((url) => {
      console.log("↓url");
      console.log(url);
      console.log("↑url");
      const xhr = new XMLHttpRequest();
      console.log("↓xhr");
      console.log(xhr);
      console.log("↑xhr");
      xhr.responseType = 'blob';
      // xhr.responseType = set("Access-Control-Allow-Origin", "*");
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
      console.log(url);

      const img = document.getElementById('myimg');
      img.setAttribute('src', url);
    });
  // TODO: ↑ Fix connnect to cloud storage later

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

        <div>
          {/* <img src="https://i.ytimg.com/vi/CFZcxLMUSYI/maxresdefault.jpg" /> */}
          <img src={spaceRef} />

        </div>

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

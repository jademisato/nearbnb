import logo from './logo.svg';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';
import Footer from './Footer';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About'

function App() {
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
          </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;


import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Homepage from './Homepage';
import Logo from './Asset_373x.png';


// This file should handle the routing of the application. Header and footer appear here too.
function App() {
  return (
    <BrowserRouter>
    <div id="header">
      <div id="navBarContainer">
        <a href="/ ">
        <img src={Logo} id="App-banner-logo" alt="logo" /* image should take user back to homepage*//>
        </a>
        <span id="headerRoutingOptions">
          <Link to="/">About</Link> | {" "}
          <Link to="/">Sponsors</Link> | {" "}
          <Link to="/">VIC 2026</Link> | {" "}
        </span>
      </div>
      <a href="/">
      </a>
    </div>
    <div className="App">
      <Routes>
            <Route path = "/" element={<Homepage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;


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
        { /* image should take user back to homepage*/}
        <img src={Logo} id="App-banner-logo" alt="logo"/>
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
    <footer id = "footer">
      <span id ="footerRoutingOptions">
          <Link to="/">Help</Link> | {" "}
          <Link to="/">Press Kit</Link> | {" "}
          <Link to="/">Contact</Link> | {" "}
      </span>
    </footer>
    </BrowserRouter>

  );
}

export default App;

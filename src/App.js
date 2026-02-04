
import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Homepage from './Homepage';
import Sponsorships from './Sponsorships';
import Logo from './Asset_373x.png';



// This file should handle the routing of the application. Header and footer appear here too.
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>

    <div id="header">
      <div id="navBarContainer">
        <a href="/ " id='logo-link'>  
        { /* image should take user back to homepage*/}
        <img src={Logo} id="App-banner-logo" style={{marginLeft: '40px'}} alt="logo"/>
        <p id='vicText' style={{marginLeft: '5px'}}>VIC Jam</p>
        </a>
        <span id="headerRoutingOptions">
          <button id ='sponsorButton'>Sponsorships</button>
          <button id ='signupButton'>Sign Up</button>
        </span>
      </div>
    </div>


    <div className="App">
      <Routes>
            <Route path = "/" element={<Homepage/>} />
            <Route path = "/sponsorships" element={<Sponsorships/>} />
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

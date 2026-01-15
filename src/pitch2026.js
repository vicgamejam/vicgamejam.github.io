import Logo from './Asset_373x.png';
import './pitch2026.css';


function Pitch2026(){
    return (
        <div id='parent'>
            <div id='text-side'>
                <h1>Make a <br/>game in <br/><strong>4 days!</strong></h1>
                <p>The Virginia Inter-Collegiate Jam (VIC Jam) is the first ever game jam
                    hosted by university level game design/development clubs in Virginia! 
                    We are inviting students from participating universities to join in!</p>
            </div>
            <span id='logo-side'>
                <img src={Logo} id="pitch-logo" alt="logo"/>
            </span>
        </div>
    )
}

export default Pitch2026;
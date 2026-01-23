import Logo from './Asset_373x.png';
import './SponsorshipPitch2026.css'
function SponsorshipPitch2026()
{
    return(
        <div id='sponsorshipPitch'>
            <div id ='sponsorImage'>
                <img src={Logo} id="pitch-logo" alt="logo"/>
            </div>
            <div id="sponsorText">
                <h2 id ='sponsorHeader'>
                    Help us inspire the next generation of game developers
                </h2>
                <p id="sponsorBody">
                    VIC GAME DEVELOPERS FOUNDATION is a 501(c)(3) nonprofit orgainization. Support our mission to bring success to game developers in Virginia!
                </p>
                <div id='sponsorButtons'>
                    <button id='Donate'>Donate</button>
                    <button id="Benefits">See Benefits</button>
                </div>
            </div>
        </div>
    )
}



export default SponsorshipPitch2026;
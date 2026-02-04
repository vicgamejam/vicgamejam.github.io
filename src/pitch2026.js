import Logo from './Asset_373x.png';
import './pitch2026.css';


function Pitch2026(){
    return (
        <div id='parent'>
            <div id='text-side'>
                <h2 id='pitchHeader'>Get ready to join Virginia's largest college game jam</h2>

                <p id='pitchText'>VIC Jam is a ranked, 72-hour game jam for students attending colleges in Virginia. The theme will
                    be announced on Thursday, March 26th at 6pm!
                </p>
                <div id='buttonDiv'>
                    <button id='signup'>
                        Sign Up
                    </button>
                    <button id='secondary'>
                        Secondary
                    </button>
                </div>
            </div>
            <span id='logo-side'>
                <img src={Logo} id="pitch-logo" alt="logo"/>
            </span>
        </div>
    )
}

export default Pitch2026;
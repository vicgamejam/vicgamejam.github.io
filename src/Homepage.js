import Pitch2026 from "./pitch2026";
import CountdownTimer from "./CountdownTimer";
import LastYear2026 from "./lastyear2026";
import './Homepage.css'

/*Trying to modulate the homepage as much as possible. Want to make it so later contributers can plug in new modules
if they want to as easily as possible.

to add a module, import the JSX file and add the tag to the return div
*/

var d_Day = new Date("March 26, 2026 23:00:00");

function Homepage()
{
    //this breaks my rule of modularity. I will try to figure out a way to do it better once everything is in place
    if (Date.now() > d_Day)
    {
        d_Day = new Date("March 30, 2026 23:00:00");
    }
    return (<div id="homepage"><Pitch2026/> <CountdownTimer targetDate={d_Day}/> <LastYear2026/>
    </div>)

}

export default Homepage;
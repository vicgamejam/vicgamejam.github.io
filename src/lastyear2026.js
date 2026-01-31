import './lastyear2026.css'

function LastYear2026(){
    //embeding last years youtube video for now. probably should link itch page too. Not sure where we want to do that though
    return (
        <div id = "lastYearBorder">
            <div id='internalSpace'>
                <iframe  width="1400" height="758" src="https://www.youtube.com/embed/n05WiAtyBf8?si=jhqgwKr1jnBDg67O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div id='lastYearText'>
                    <h4 id="lastYear">Last Year</h4>
                    <p id="text">Play the games, watch the results</p>
            </div>
            </div>
        </div>
    )
}

export default LastYear2026;
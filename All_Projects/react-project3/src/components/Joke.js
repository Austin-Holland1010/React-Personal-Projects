import React from "react";

function Joke(props) {
    const punchline = props.punchline
    const setup = props.setup
    const jokeNum = props.jokeNumber
    
    return (
        <div>
            <h1>Joke #{jokeNum}</h1>
            {props.setup && <h3>Setup: {setup}</h3>}
            <p>Punchline: {punchline}</p>
            <hr />
        </div>
    )
}

export default Joke
import React from "react";
import Joke from "./Joke";

function JokeApp() {
    let jokeNum = 0;
    return(
        <div>
            <Joke 
                jokeNumber = {++jokeNum}
                setup="I got my daughter a fridge for her birthday."
                punchline="I can't wait to see her face light up when she opens it."
            />

            <Joke 
                jokeNumber = {++jokeNum}
                setup="How did the hacker escape the police?"
                punchline="He just ransomware!"
            />

            <Joke 
                jokeNumber = {++jokeNum}
                setup="Why don't pirates travel on mountain roads?"
                punchline="Scurvy."
            />

            <Joke 
                jokeNumber = {++jokeNum}
                setup="Why do bees stay in the hive in the winter?"
                punchline="Swarm."
            />

            <Joke 
                jokeNumber = {++jokeNum}
                setup="What's the best thing about Switzerland?"
                punchline="I don't know, but the flag is a big plus!"
            />

            <Joke
                jokeNumber = {++jokeNum}
                punchline="Look Ma! No setup"
            />
        </div>
    )
}

export default JokeApp
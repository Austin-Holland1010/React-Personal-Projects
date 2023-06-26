import React from "react";
import {useState} from 'react';
import memesData from "./data/memesData";

function Meme() {

    /**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */
    const [image, setImage] = React.useState(memesData.data.memes[0].url)

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setImage(url)
        console.log(url)
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    id="top-text"
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button onClick={getMemeImage} className="form--button">Get a new meme image 🖼</button>
            </div>
            <img className="meme--image" src={image}></img>
        </main>
    )
}

export default Meme
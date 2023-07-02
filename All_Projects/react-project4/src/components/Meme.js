import React from "react";
import {useState} from 'react';
import memesData from "./data/memesData"

    /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */

    /**
     * Challenge: 
     * 1. Set up the text inputs to save to
     *    the `topText` and `bottomText` state variables.
     * 2. Replace the hard-coded text on the image with
     *    the text being saved to state.
     */
    export default function Meme() {
        /**
         * Challenge: 
         * 1. Set up the text inputs to save to
         *    the `topText` and `bottomText` state variables.
         * 2. Replace the hard-coded text on the image with
         *    the text being saved to state.
         */

        const [meme, setMeme] = React.useState({
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg" 
        })
        const [allMemes, setAllMemes] = React.useState(memesData)
        
        React.useEffect(() => {
            fetch("https://api.imgflip.com/get_memes")
                .then(res => res.json())
                .then(data => setAllMemes(data.data.memes))
        }, [])

        function getMemeImage() {
            const randomNumber = Math.floor(Math.random() * allMemes.length)
            const url = allMemes[randomNumber].url
            setMeme(prevMeme => ({
                ...prevMeme,
                randomImage: url
            })) 
        }
            
        function handleChange(event) {
            const {name, value} = event.target
            setMeme(prevMeme => ({
                ...prevMeme,
                [name]: value
            }))
        }
        
        return (
            <main>
                <div className="form">
                    <input 
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input 
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                    <button 
                        className="form--button"
                        onClick={getMemeImage}
                    >
                        Get a new meme image 🖼
                    </button>
                </div>
                <div className="meme">
                    <img src={meme.randomImage} className="meme--image" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </main>
        )
    }
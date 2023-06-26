import React from "react";
import Header from "./Header";
import Meme from "./Meme";


function App() {
    return (
        <div>
            <Header />
            <Meme />
        </div>
    )
}

export default App


/*
export default function App() {

    function handleClick() {
        console.log("I was clicked!")
    }
    
    function handleHover() {
        console.log("Image hovered over!")
    }

    return (
        <div className="container">
            <img onMouseOver={handleHover} src="https://picsum.photos/640/360" />
            <button onClick={handleClick}> Click me</button>
        </div>
    )
    
}
*/

/**
* Challenge: Replace our hard-coded "Yes" on the page with 
* some state initiated with React.useState()
*/

/*
export default function App() {
    const [result, setResult] = React.useState("Yes")

    function handleClick() {
        if(result === "No")
        {
            setResult("Yes")
        } else
        {
            setResult("No")
    
        }
    }
    
    return (
        <div onClick={handleClick} className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>{result}</h1>
            </div>
        </div>
    )
}
*/

/*

export default function App() {
    const [count, setCount] = React.useState(0)

    function handleUpClick() {
        setCount(prevCount => prevCount + 1)
    }

    function handleDownClick() {
        setCount(function(oldValue) {
            return oldValue - 1
        })
    }

    return (
        <div className="counter">
            <button onClick={handleDownClick} className="counter--minus">–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button onClick={handleUpClick} className="counter--plus">+</button>
        </div>
    )
}
*/

/*
1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?

    a. New value of state (setCount(42))
    b. Callback function - whatever the callback function returns === new value of state



2. When would you want to pass the first option (from answer
   above) to the state setter function?
    Whenever you don't need the previous value of state to determine
    what the new value of state should be.


3. When would you want to pass the second option (from answer
   above) to the state setter function?
   Whenever you do need the previous value of state to determine
    what the new value of state should be.

*/


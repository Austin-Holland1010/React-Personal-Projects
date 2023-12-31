import React from "react";
import Header from "./Header";
import Meme from "./Meme";
import Count from "./Count";
import Star from "./Star";
import boxes from "./data/boxes";
import BoxComp from "./BoxComp";
import Joke from "./Joke";
import jokesData from "./data/jokesData"
import Form from "./Form";
import WindowTracker from "./WindowTracker";

/*
function App() {
    return (
        <div>
            <Header />
            <Meme />
        </div>
    )
}

export default App
*/




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

/*export default function App() {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     
    const [isGoingOut, setIsGoingOut] = React.useState(true)
    
    function changeIsGoingOut()
    {
        setIsGoingOut(function() {
            return !isGoingOut
        })
    }

    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div onClick={changeIsGoingOut} className="state--value">
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}
*/

/*
export default function App() {
    /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array with the same 2 items below
     * 
     * Don't worry about fixing `addItem` quite yet.
     
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
        })
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}
*/

/*
export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

    /**
     * Challenge: Use a ternary to determine which star image filename
     * should be used based on the `contact.isFavorite` property
     * 
     * `true` => "star-filled.png"
     * `false` => "star-empty.png"
     

    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     

    let starIcon = contact.isFavorite ? "/images/star-filled.png" : "/images/star-empty.png"
    
    function toggleFavorite() {
        setContact(prevContact => {
           
            return {
                /* Same as the following
                firstName: "John",
                lastName: "Doe",
                phone: "+1 (719) 555-1212",
                email: "itsmyrealname@example.com",
                isFavorite: true,   
                isFavorite: !prevContact.isFavorite
                
                ...prevContact, 
                isFavorite: !prevContact.isFavorite
            }
        })
    }
    
    return (
        <main>
            <article className="card">
                <img src="/images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={starIcon} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName + " " + contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}
*/

/*
export default function App() {
    const [count, setCount] = React.useState(0)
    
    function add() {
        setCount(prevCount => prevCount + 1)
    }
    
    function subtract() {
        setCount(prevCount => prevCount - 1)
    }
    
    /**
     * Challenge:
     * - Create a new component named Count
     *    - It should receive a prop called `number`, whose value
     *      is the current value of our count
     *    - Have the component render the whole div.counter--count
     *      and display the incoming prop `number`
     * - Replace the div.counter--count below with an instance of
     *   the new Count component
     
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <Count 
                number={count}
            />
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}
*/

/*
export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    
    /**
     * Challenge: Move the star image into its own component
     * - It should receive a prop called `isFilled` that it
     *   uses to determine which icon it will display
     * - Import and render that component, passing the value of
     *   `isFavorite` to the new `isFilled` prop.
     * - Don't worry about the abiliity to flip this value quite yet.
     *   Instead, you can test if it's working by manually changing
     *   `isFavorite` in state above.
     
    
    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <Star 
                        isFilled={contact.isFavorite}
                        handleClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}
*/

/*
export default function App(props) {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     
    const styles = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    }
    

    const [boxData, setBoxData] = React.useState(boxes)
    const mappedBoxes = boxData.map(box => (
        <BoxComp on={box.on} id={box.id}/>
    ))

/**
     * Challenge part 2:
     * 1. Create a separate component called "Box" and
     *    replace the `div` above with our <Box /> components
     * 2. Pass the Box component a prop called `on` with the
     *    value of the same name from the `boxes` objects
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
     
    return (
        <main>
            {mappedBoxes}
        </main>
    )
}*/

/*

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    /**
     * Challenge: Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Box components
     * and set it up so when they get clicked it runs the function
     
    * Challenge: use setSquares to update the
    * correct square in the array.
    * 
    * Make sure not to directly modify state!
    * 
    * Hint: look back at the lesson on updating arrays
    * in state if you need a reminder on how to do this
    
    function toggle(id) {
        
        setSquares(prevSquares => {
            return (prevSquares.map(square => {
                return square.id === id ? {...square, on :!square.on} : {...square}
            }))
        })
                
        /*
        setSquares(prevSquares => {
            const newSquares = []
            for(let i = 0; i < prevSquares.length; i++) {
                const currentSquare = prevSquares[i]
                if(currentSquare.id === id) {
                    const updatedSquare = {
                        ...currentSquare,
                        on: !currentSquare.on
                    }
                    newSquares.push(updatedSquare)
                } else {
                    newSquares.push(currentSquare)
                }
            }

            //Could also be
            /*
            setSquares(prevSquares => {
                return prevSquares.map((square) => {
                    return square.id === id ? {...square, on: !square.on} : square
            })
        })
            
           // return newSquares
        //})
    }

    const squareElements = squares.map(square => (
        <BoxComp 
            key={square.id} 
            on={square.on}
            toggle={() => toggle(square.id)} 
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
*/

/*
export default function App() {
    const jokeElements = jokesData.map(joke => {
        return (
            <Joke 
                key={joke.id}
                setup={joke.setup} 
                punchline={joke.punchline} 
            />
        )
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}
*/

/*
export default function App() {
    return (
        <div>
            <Form />
        </div>
    )
}
*/

//export default function App() {
    
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
/*
    const [formData, setFormData] = React.useState(
        {
            email: "",
            password: "",
            verifyPassword: "",
            newsletter: true
        }
    )

    console.log(formData)

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevData => {
            return (
                {
                    ...prevData,
                    [name]: type === "checkbox" ? checked : value
                }
            )
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.verifyPassword)
        {
            console.log("Successfully signed up")
            if(formData.newsletter === true)
            console.log("Thanks for signing up for our newsletter")
        } else {
            console.log("Passwords do not match")
        }
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="verifyPassword"
                    value={formData.verifyPassword}
                    onChange={handleChange}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
*/
/*
export default function App() {
    const [starWarsdata, setstarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)
    
    console.log("Component rendered")
    // 1. GET the data (fetch)
    // 2. Save the data to state

    /**
     * Challenge: Combine `count` with the request URL
     * so pressing the "Get Next Character" button will
     * get a new character from the Star Wars API.
     * Remember: don't forget to consider the dependencies
     * array!
     

    // side effects
   React.useEffect(() => {
        console.log("Effect function run")
        fetch("https://swapi.dev/api/people/" + count)
        .then(res => res.json())
        .then(data => setstarWarsData(data))
   }, [count])

    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
            <pre>{JSON.stringify(starWarsdata, null, 2)}</pre>
        </div>
    )
}
*/
/*
1. What is a "side effect" in React? What are some examples?
    - A side effect is any code that you want to run
        that react is not incharge of handling.
    - local storage, API calls, any code that effects an
        outside system


2. What is NOT a "side effect" in React? Examples?
    - Anything that React is incharge of
    - Ex: state, keeping UI in sync with data


3. When does React run your useEffect function? When does it NOT run
   the effect function?
   - As soon as the component loads (1st render)
   - On every re-render of the component (no dependencies array)
   - Will NOT run the effect when the dependencies in the array stay the same
      between renders
   

4. How would you explain what the "dependecies array" is?
    - 2nd parameter to the useEffect function
    - When a component re-renders it is compared to the previous
        array. If changes are deteted the code in the useEffect is ran

*/

export default function App() {
    /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */
    
    const [show, setShow] = React.useState(true)

    console.log(show)
    
    function handleShowChange() {
        setShow(prevValue => {
            return !show
        })
    }
    return (
        <div className="container">
            <button onClick={handleShowChange}>
                Toggle WindowTracker
            </button>
            {show ? <WindowTracker /> : <p></p>}
        </div>
    )
}

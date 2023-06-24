import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Contact from './components/Contact';
import JokeApp from './components/JokeApp';

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
*/

/**
 * Challenge: fix the h1 below to use the timeOfDay
 * string we determined in the code above


function App2() {
  const firstName = "Joe"
  const lastName = "Schmoe"
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
    
  if (hours < 12) {
       timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
  } else {
      timeOfDay = "night"
  }

  return (
    <div>
      <h1>Hello {firstName + " " + lastName}! </h1>
      <h1>It is currently about {date.getHours() % 12} o'clock </h1>
      <h1>Good {timeOfDay}!</h1>
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App2 />
);
*/

/*
1. What do props help us accomplish?
  props let us to pass in values and apply those values within a function. These values can be
  used to set the value of an html element or be used to perfrom some other calculation


2. How do you pass a prop into a component?
  When you call the function you need to add the property
  along with its value all within the <Name prop prop>.


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
   
   No, because the JSX we use to describe native DOM elements will
  be turned into REAL DOM elements by React. And real DOM elements
  only have the prooperties/attributes specified in the HTML specification.
  (Which doesn't include properties like `blahblahblah`) 


4. How do I receive props in a component?
function Navbar() {
    return (
        <header>
            ...
        </header>
    )
}
  Write "props" in the (). Then use props.propertyname to
  use the value.

5. What data type is `props` when the component receives it?
  An object

*/

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
*/


/* Challenge:
One LAST time in this course, set up a React app from scratch
- Render an <App /> component
    - App should be in its own file
- App should render 4-5 <Joke /> components 
  (Joke component defined in its own file too)
    - Each Joke should receive a "setup" prop and a "punchline" prop
      and render those however you'd like
- Use your favorite 2-part jokes (setup & punchline), or check
  jokes.md file for some examples.



EXTRA CREDIT:
Some jokes are only a punchline with no setup:

E.g.: "It’s hard to explain puns to kleptomaniacs because 
they always take things literally."

If you don't pass in a "question" prop, how might you make it only 
show the punchline?
*/

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <JokeApp />
)
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
/*
function App() {
  const [things, setThings] = React.useState(["Thing 1", "Thing 2"])
  
  function addItem() {
      const newThingText = `Thing ${things.length + 1}`
      setThings(prevState => [...prevState, newThingText])
  }
  
  const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)
  
  return (
      <div>
          <button onClick={addItem}>Add Item</button>
          {thingsElements}
      </div>
  )
}
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

/*
1. How would you describe the concept of "state"?
  State is used to adjust existing data on a webpage depending on
  what that data is. It allows pages to be dynamic and 
  adjust based on previous actions

  A way for React to remember saved values from within a component.
  This is similar to declaring variables from within a component,
  with a few added bonuses (which we'll get to later)


2. When would you want to use props instead of state?
  You use props when you aren't dynamicly changing a 
  page. It is good for static pages that have components
  that are generated based on existing properties
  that are not going to change

  Anytime you want to pass data into a component so that
  component can determine what will get displayed on the
  screen.

3. When would you want to use state instead of props?
  Use state when an aspect of a webpage is going to change
  based on the user's actions on the page


4. What does "immutable" mean? Are props immutable? Is state immutable?
  Unchanging. Props are immutable. State is mutable.

*/


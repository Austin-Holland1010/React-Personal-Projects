import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 

const page = (
  <div>
    <h1>My awesome website in React</h1>
    <h3>Reasons I love React</h3>
      <ol>
          <li>It's composable</li>
          <li>It's declarative</li>
          <li>It's a hireable skill</li>            <li>It's actively maintained by skilled people</li>
      </ol>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(page);
*/



/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

  function ReactLogo() {
   return (
      <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt="React Logo" width ="150" height ="50"></img>
    );
  }

 function BigHeader() {
  return (
    <div>
      <h1>Fun facts about React</h1>
      <div style={{"margin-left": "20px"}}>
        <li>Was first released in 2013</li>
        <li>Was Originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </div>
    </div>
  );
}

  const root = ReactDOM.createRoot(document.getElementById("root"))
  root.render(
    <div>
      <ReactLogo />
      <BigHeader />
    </div>
  );

  /*
1. Why do we need to `import React from "react"` in our files?
    Importing this allows us to use the JSX library. Without it we wouldn't be able to 
    read the JSX objects we create.

2. If I were to console.log(page) in index.js, what would show up?
    The page's object infromation would be pritned to the console.

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
  You need to have a parent element to contain muliple elements

4. What does it mean for something to be "declarative" instead of "imperative"?
  Declaritice means that you specify what should be done.
  React is declaritive so it handles HOW it should be done.

5. What does it mean for something to be "composable"?
  Composible mean that something can be broken down into smaller
  more modular components. These components can be combined to perfrom a 
  larger function.
*/
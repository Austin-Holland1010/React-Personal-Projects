import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import App from './App'

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

  /*
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
  */

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
/*
function TemporaryName() {
  return (
      <div>
          <img src="./react-logo.png" width="40px" />
          <h1>Fun facts about React</h1>
          <ul>
              <li>Was first released in 2013</li>
              <li>Was originally created by Jordan Walke</li>
              <li>Has well over 100K stars on GitHub</li>
              <li>Is maintained by Facebook</li>
              <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
      </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<TemporaryName />);
*/

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

function MyReasons() {
  return(
    <div>
      <ol>
        <li>React is very employable</li>
        <li>I like learning new things</li>
        <li>Many people I know use React</li>
      </ol>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<MyReasons />);
*/

/**
Challenge:
Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */
/*
function MyHeader() {
  return (
  <header>
    <nav>
      <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt="React Logo" width ="150" height ="50"></img>
    </nav>
    <h1>Reasons why I'm excited to learn React!</h1>
  </header>
  );
}

function MyFooter() {
  return (
    <footer>
      <p>© 2023 Holland development. All rights reserved.</p>
    </footer>
  );
}

function MyReasons() {
  return(
  <div>
      <ol>
        <li>React is very employable</li>
        <li>I like learning new things</li>
        <li>Many people I know use React</li>
      </ol>
    </div>
  );
}
    
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <div>
  <MyHeader />
  <MyReasons />
  <MyFooter />
  </div>
  );
  */

/*  
1. What is a React component?
  A React component is a function that returns React elements. It 
  can be called and have its content displayed when called in the 
  render class

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
  The name of the function needs to be capitalized

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
~~~
  The return needs a ';' after the closing bracket
  */

  /**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
- Change the image styling to happen in CSS instead of in-line
  For practice, add a new class to the image in order to style it
*/
/*
function MyHeader() {
  return (
  <header>
    <nav className="nav">
      <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt="React Logo" className="Img"></img>
      <ul className="nav-items">
        <li>Pricing</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
    </nav>
  </header>
  );
}
*/

/**
Challenge: move the Footer and MainContent components
into their own files.
*/
/*
function MyFooter() {
  return (
    <footer>
      <p>© 2023 Holland development. All rights reserved.</p>
    </footer>
  );
}

function MainContent() {
  return(
    <div>
      <h1>Reasons why I'm excited to learn React!</h1>
      <ol>
        <li>React is very employable</li>
        <li>I like learning new things</li>
        <li>Many people I know use React</li>
      </ol>
    </div>
    )
}
*/
/*
function Page() {
   return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)
*/


/**
Challenge: Project setup

- Create a `components` folder
- Create the following components in separate files inside
  the components folder.  In each one, just render an `h1` 
  with the name of the component (e.g. return <h1>Navbar goes here</h1>):
    - Navbar
    - Main
- Create an App component outside the components folder (sibling to
  the index.js file)
    - Have App render the Navbar and Main components
- Import and render the App component inside of index.js using ReactDOM
    - At this point you should have your "Navbar goes here" etc. showing up
      in the mini-browser.
- Go to Google fonts and get the "Inter" font with weights 400, 600, and 700.
  Put the links to those fonts ABOVE the style.css link in index.html (Use
  the `<link/>` elements instead of the @import or npm options for getting
  the fonts. You may need to do some extra research to figure out how this 
  works if you haven't done it before)
*/

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
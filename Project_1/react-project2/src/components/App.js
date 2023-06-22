import React from "react";
import Picture from "./Picture";
import Name from "./Name";
import Linked_Buttons from "./Linked_Buttons";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";

function App() {
    return (
        <div>
            <Picture />
            <Name />
            <Linked_Buttons />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

export default App
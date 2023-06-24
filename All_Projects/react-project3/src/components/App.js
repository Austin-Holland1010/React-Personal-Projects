import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import Contact from "./Contact";

/*
export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card />
        </div>
    )
}
*/

function App() {
    return(
        <div>
            <Contact 
                img="https://www.deccanchronicle.com/_next/image?url=http%3A%2F%2Fimages.deccanchronicle.com%2Fdc-Cover-gqrt0u940hlmi2llm5tpft0qg6-20161130155941.Medi.jpeg&w=1080&q=75"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img="https://avatars.githubusercontent.com/u/79608000?v=4"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img="https://www.deccanchronicle.com/_next/image?url=http%3A%2F%2Fimages.deccanchronicle.com%2Fdc-Cover-gqrt0u940hlmi2llm5tpft0qg6-20161130155941.Medi.jpeg&w=1080&q=75"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="https://www.deccanchronicle.com/_next/image?url=http%3A%2F%2Fimages.deccanchronicle.com%2Fdc-Cover-gqrt0u940hlmi2llm5tpft0qg6-20161130155941.Medi.jpeg&w=1080&q=75"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}

export default App
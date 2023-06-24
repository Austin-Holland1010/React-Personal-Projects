import React from "react";

function Linked_Buttons() {
    return (
        <nav className="button-container">
            <form action="https://github.com/Austin-Holland1010" target="_blank">
                <button  className="GitHub-Button">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" height="40px" alt="GitHub Logo" className="GitHub-Logo"></img>
                    GitHub
                </button>
            </form>

            <form action="https://www.linkedin.com/in/austin-holland-9b3442270/" target="_blank">
                <button className="LinkedIn-Button">
                    <img src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo-700x394.png" height="70px" alt="LinkedInLogo" className="LinkedIn-Logo"></img>
                </button>
            </form>
        </nav>
    )
}

export default Linked_Buttons
import React  from "react";

function Header() {
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

  export default Header
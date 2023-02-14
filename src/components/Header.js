import React from "react"
import logo from "../logo.svg"

import "./Header.css"; 

const Header = ({name, city, status}) => {
    // console.log(props);
    return (
      <header className="header-header">
        <img src={logo} className="header-logo" alt="logo" />
        <p>
            name: {name} /City: {city} /Status: {status}
        </p> 
        <a
          className="header-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    );
}

export default Header
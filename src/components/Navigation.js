import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return(
        <div className="nav">
            <p><Link to="/" className="home">Home</Link></p>
            <p><Link to="/about" className="about">About</Link></p>
            <p><Link to="./search" className="search">Search</Link></p>
        </div>
    ); 
}

export default Navigation;
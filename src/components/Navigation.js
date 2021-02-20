import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return(
        <div className="nav">
            <p><Link to="/" className="home">Home</Link></p>
            <p><Link to="./search" className="search">Search</Link></p>
            <p><Link to="./login" className="login">SignIn</Link></p>
            <p><Link to="./join" className="join">SignUp</Link></p>
        </div>
    ); 
}

export default Navigation;
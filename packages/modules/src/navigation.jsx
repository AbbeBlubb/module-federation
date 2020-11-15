import React from "react";
import "./navigation.css";


const Navigation = props => (
  <nav className="box">
    <p>I'm the REMOTE navigation!</p>
    {props.children}
  </nav>
);

export default Navigation;

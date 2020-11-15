import React from "react";
import { NavLink } from "react-router-dom";


function NavigationLinks() {
    return (
        <>
            <NavLink exact to="/" className="nav-link" activeClassName="nav-link--active">
                <button tabIndex="-1">Start</button>
            </NavLink>
            <NavLink exact to="/cards" className="nav-link" activeClassName="nav-link--active">
                <button tabIndex="-1">Cards</button>
            </NavLink>
            <NavLink exact to="/loans" className="nav-link" activeClassName="nav-link--active">
                <button tabIndex="-1">Loans</button>
            </NavLink>
        </>
    );
}

export default NavigationLinks;

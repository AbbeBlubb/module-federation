import React from "react";
import { NavLink } from "react-router-dom";


function NavigationLinks() {
    return (
        <>
            <NavLink to="/" activeClassName="nav-link--active">
                <button>Start</button>
            </NavLink>
            <NavLink to="/cards" activeClassName="nav-link--active">
                <button>Cards</button>
            </NavLink>
            <NavLink to="/loans" activeClassName="nav-link--active">
                <button>Loans</button>
            </NavLink>
        </>
    );
}

export default NavigationLinks;

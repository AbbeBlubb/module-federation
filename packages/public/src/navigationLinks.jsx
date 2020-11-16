import React from "react";
import { NavLink } from "react-router-dom";
import { sendAnalytics } from "./App";

function NavigationLinks() {
    return (
        <>
            <NavLink exact to="/" className="nav-link" activeClassName="nav-link--active">
                <button tabIndex="-1" onClick={() => sendAnalytics("Start button-link clicked!")}>
                    Start
                </button>
            </NavLink>
            <NavLink exact to="/cards" className="nav-link" activeClassName="nav-link--active">
                <button tabIndex="-1" onClick={() => sendAnalytics("Cards button-link clicked!")}>
                    Cards
                </button>
            </NavLink>
            <NavLink exact to="/loans" className="nav-link" activeClassName="nav-link--active">
                <button tabIndex="-1" onClick={() => sendAnalytics("Loans button-link clicked!")}>
                    Loans
                </button>
            </NavLink>
        </>
    );
}

export default NavigationLinks;

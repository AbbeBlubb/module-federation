import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./index.css";
import "./normalize.css";
import Start from "./start";
import InfoCards from "./infoCards";
import InfoLoans from "./infoLoans";
import { federatedWrapperHOC } from "./errorHandling/federatedWrapperHOC";

// Import logic
// ToDo: Make this a dynamic import
import { FetchProxy } from "infrastructure-remote/Fetch";
export const fetchProxy = new FetchProxy();

// Dynamic import, error handling and suspense for UI modules
const Header = federatedWrapperHOC(
    React.lazy(() => import("modules-remote/Header"))
);

const Navigation = federatedWrapperHOC(
    React.lazy(() => import("modules-remote/Navigation"))
);

const Footer = federatedWrapperHOC(
    React.lazy(() => import("modules-remote/Footer"))
);

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: "",
            name: "",
            account: "",
            response: null,
        };
    }

    async componentDidMount() {
        const response = await fetchProxy.get("domain.com/user/1");
        const data = JSON.parse(response);
        this.setState({ ...data });
        console.log("Response from fetch 1: ", data);

        const response2 = await fetchProxy.get("domain.com/user/1");
        const data2 = JSON.parse(response2);
        console.log("Response from fetch 2: ", data2);
    }

    render() {
        return (
            <HashRouter>
                <div className="main">
                    <Header
                        error={
                            <div className="box">
                                Error CUSTOM: Something went wrong with the
                                HEADER, and a log message has been sent!
                            </div>
                        }
                        fallback={<div>Fallback CUSTOM: spinner!</div>}
                    />

                    <Navigation
                        error={
                            <div className="box">
                                Error CUSTOM: Something went wrong with the
                                NAVIGATION, and a log message has been sent!
                            </div>
                        }
                        fallback={<div>Fallback CUSTOM: spinner!</div>}
                    >
                        <NavLink to="/" activeClassName="nav-link--active">
                            <button>Start</button>
                        </NavLink>
                        <NavLink to="/cards" activeClassName="nav-link--active">
                            <button>Cards</button>
                        </NavLink>
                        <NavLink to="/loans" activeClassName="nav-link--active">
                            <button>Loans</button>
                        </NavLink>
                    </Navigation>

                    <Route exact path="/">
                        <Start language={this.state.language} />
                    </Route>
                    <Route exact path="/cards">
                        <InfoCards />
                    </Route>
                    <Route exact path="/loans">
                        <InfoLoans />
                    </Route>

                    <Footer
                        error={
                            <div className="box">
                                Error CUSTOM: Something went wrong with the
                                FOOTER, and a log message has been sent!
                            </div>
                        }
                        fallback={<div>Fallback CUSTOM: spinner!</div>}
                        name={this.state.name}
                    />
                </div>
            </HashRouter>
        );
    }
}

import React from "react";
import { HashRouter, Route } from "react-router-dom";
import NavigationLinks from "./navigationLinks";
import "./index.css";
import "./normalize.css";
import { federatedWrapperHOC } from "./errorHandling/federatedWrapperHOC";
import ErrorSwap from "./errorHandling/errorSwap";
import Fallback from "./errorHandling/fallback";

// Import logic
// ToDo: Make this a dynamic import
import { FetchProxy } from "infrastructure-remote/Fetch";
export const fetchProxy = new FetchProxy();

// Dynamic imports with error handling and suspense for UI modules
const Header = federatedWrapperHOC(React.lazy(() => import("modules-remote/Header")));
const Navigation = federatedWrapperHOC(React.lazy(() => import("modules-remote/Navigation")));
const Footer = federatedWrapperHOC(React.lazy(() => import("modules-remote/Footer")));
const Start = federatedWrapperHOC(React.lazy(() => import("./start")));
const InfoCards = federatedWrapperHOC(React.lazy(() => import("./infoCards")));
const InfoLoans = federatedWrapperHOC(React.lazy(() => import("./infoLoans")));

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
                    <Header error={<ErrorSwap name="Header" />} fallback={<Fallback />} />

                    <Navigation error={<ErrorSwap name="Navigation" />} fallback={<Fallback />}>
                        <NavigationLinks />
                    </Navigation>

                    <Route exact path="/">
                        <Start
                            error={<ErrorSwap name="Start" />}
                            fallback={<Fallback />}
                            language={this.state.language}
                        />
                    </Route>
                    <Route exact path="/cards">
                        <InfoCards error={<ErrorSwap name="InfoCards" />} fallback={<Fallback />} />
                    </Route>
                    <Route exact path="/loans">
                        <InfoLoans error={<ErrorSwap name="InfoLoans" />} fallback={<Fallback />} />
                    </Route>

                    <Footer
                        error={<ErrorSwap name="Footer" />}
                        fallback={<Fallback />}
                        name={this.state.name}
                    />
                </div>
            </HashRouter>
        );
    }
}

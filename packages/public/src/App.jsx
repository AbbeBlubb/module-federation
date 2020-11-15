import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import "./index.css";
import "./normalize.css";
import Start from "./start";
import InfoCards from "./infoCards";
import InfoLoans from "./infoLoans";

import { FetchProxy } from "infrastructure-remote/Fetch"; // Make this a dynamic import
export const fetchProxy = new FetchProxy();

const Header = React.lazy(() => import("modules-remote/Header"));
const Navigation = React.lazy(() => import("modules-remote/Navigation"));
const Footer = React.lazy(() => import("modules-remote/Footer"));


export class App extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            language: "",
            name: "",
            account: "",
            response: null
        }
        
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
        <div style={{ backgroundColor: "lightblue", padding: "20px" }}>
          <React.Suspense fallback={<div>Suspense fallback for Header</div>}>
            <Header />
          </React.Suspense>

          <React.Suspense fallback={<div>Suspense fallback for Navigation</div>}>
            <Navigation>
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
          </React.Suspense>

          <Route exact path="/">
            <Start language={this.state.language} />
          </Route>
          <Route exact path="/cards">
            <InfoCards />
          </Route>
          <Route exact path="/loans">
            <InfoLoans />
          </Route>

          <React.Suspense fallback={<div>Suspense fallback for Footer</div>}>
            <Footer name={this.state.name} />
          </React.Suspense>
        </div>
      </HashRouter>
    );
  }
}

import React from "react";
import ReactDOM from "react-dom";

const Navigation = React.lazy(() => import("nav-consumed/Nav-exposed"));

import "./index.css";

const App = () => (
    <div style={{ backgroundColor: "beige", padding: "10px"}}>
        <p>Home app will consume a remote!</p>
        <React.Suspense fallback={<div />}>
            <Navigation />
        </React.Suspense>
    </div>
);

ReactDOM.render(<App />, document.getElementById("app"));

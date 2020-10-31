import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Navigation = React.lazy(() => import("modules-remote/Navigation"));
const Footer = React.lazy(() => import("modules-remote/Footer"));

const App = () => (
    <div style={{ backgroundColor: "lightblue", padding: "20px"}}>
        <h1>Home app will consume a remote!</h1>

        <React.Suspense fallback={<div>Suspense fallback</div>}>
            <Navigation />
        </React.Suspense>

        <React.Suspense fallback={<div>Suspense fallback</div>}>
            <Footer />
        </React.Suspense>
    </div>
);

ReactDOM.render(<App />, document.getElementById("app"));

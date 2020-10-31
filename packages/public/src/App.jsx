import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./normalize.css";

import { fetchWithCacheProxy } from "infrastructure-remote/Fetch" // Make this a dynamic import

const Navigation = React.lazy(() => import("modules-remote/Navigation"));
const Footer = React.lazy(() => import("modules-remote/Footer"));


function App() {
    fetchWithCacheProxy();

    return(
        <div style={{ backgroundColor: "lightblue", padding: "20px"}}>
            <h1>Public app will consume remotes!</h1>
            <p>Fetch from remote proxy module</p>
            <React.Suspense fallback={<div>Suspense fallback</div>}>
                <Navigation />
            </React.Suspense>

            <React.Suspense fallback={<div>Suspense fallback</div>}>
                <Footer />
            </React.Suspense>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("app"));

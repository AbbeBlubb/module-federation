import React from "react";
import "./index.css";
import "./normalize.css";
import { fetchAPIProxy } from "infrastructure-remote/Fetch" // Make this a dynamic import

const fetchy = new fetchAPIProxy()

const Navigation = React.lazy(() => import("modules-remote/Navigation"));
const Footer = React.lazy(() => import("modules-remote/Footer"));


export class App extends React.Component {
    
    async componentDidMount() {
        const response = await fetchy.makeFetchWithAPIProxy("domain/user/1");
        console.log("fetch: ", response)
    }

    render() {
        return (
            <div style={{ backgroundColor: "lightblue", padding: "20px" }}>
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
    }
};

import React from "react";
import "./index.css";
import "./normalize.css";
import { FetchProxy } from "infrastructure-remote/Fetch" // Make this a dynamic import

const fetchProxy = new FetchProxy()
const Navigation = React.lazy(() => import("modules-remote/Navigation"));
const Footer = React.lazy(() => import("modules-remote/Footer"));


export class App extends React.Component {
    
    async componentDidMount() {
        const response = await fetchProxy.get("domain.com/user/1");
        const data = JSON.parse(response)
        this.setState({...data})
        console.log("Response from fetch 1: ", data)

        const response2 = await fetchProxy.get("domain.com/user/1");
        const data2 = JSON.parse(response2)
        console.log("Response from fetch 2: ", data2)
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

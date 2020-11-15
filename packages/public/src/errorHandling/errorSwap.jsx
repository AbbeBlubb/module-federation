import React from "react";


export function ErrorSwap(props) {
    return (
        <section className="box">
            <p>
                Something went wrong with the {props.name.toUpperCase()} component. A log has been sent to the log service!
            </p>
        </section>
    );
}

export default ErrorSwap;

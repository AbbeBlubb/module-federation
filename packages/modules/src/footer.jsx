import React from "react";

function Footer({ name }) {
    return (
        <footer className="box">
            <div>
                Remote footer
                <br />
                Fetched name is {name}
            </div>
        </footer>
    );
}

export default Footer;

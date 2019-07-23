import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

class Footer extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        const navStyle = {
            color: "white",
            textDecoration: "none"
        }
        return (
            <div className="footer">
                <h4>@All rights reserved</h4>
                <ul className="nav-links">
                    <Link style={navStyle} to="/">
                        <li>Home</li>
                    </Link>
                    <Link style={navStyle} to="/faq">
                        <li>FAQ</li>
                    </Link>
                    <Link style={navStyle} to="/regulamin">
                        <li>Regulamin</li>
                    </Link>
                    <Link style={navStyle} to="/kontakt">
                        <li>Kontakt</li>
                    </Link>
                </ul>
            </div>
        )
    }
}

export default Footer;
import React from 'react';
import { Link } from "react-router-dom";
import './App.css';
import logo from './img/logo.png';
import cart from './img/basket.png';

class Navigation extends React.Component {
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
            <div className="nav">
                <h3><img src={logo} alt="Logo" /></h3>
                <ul className="nav-links">
                    <Link style={navStyle} to="/">
                        <li>Home</li>
                    </Link>
                    <Link style={navStyle} to="/faq">
                        <li>FAQ</li>
                    </Link>
                    <Link style={navStyle} to="/regulamin">
                        <li>Terms and Conditions</li>
                    </Link>
                    <Link style={navStyle} to="/contact">
                        <li>Contact</li>
                    </Link>
                    <Link style={navStyle} to="/cart">
                        <li><img src={cart} alt="Cart" /></li>
                    </Link>
                </ul>
            </div>
        )
    }
}

export default Navigation;
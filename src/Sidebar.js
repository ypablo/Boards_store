import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
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
            <div className="sidebar">
                <ul className="bar-list">
                    <Link style={navStyle} to="/">
                        <li><h1>Sortuj:</h1></li>
                    </Link>
                    <Link style={navStyle} to="/">
                        <li>Nazwa A-Z</li>
                    </Link>
                    <Link style={navStyle} to="/">
                        <li>Nazwa Z-A</li>
                    </Link>
                    <Link style={navStyle} to="/">
                        <li>Cena rosnąco</li>
                    </Link>
                    <Link style={navStyle} to="/">
                        <li>Cena malejąco</li>
                    </Link>
                </ul>
                <hr className="hr" />
            </div>
        )
    }
}

export default Sidebar;
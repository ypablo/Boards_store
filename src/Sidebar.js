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
                    <li><h1>Sortuj:</h1></li>
                    <Link style={navStyle} to="/basket">
                        <li>Nazwa A-Z</li>
                    </Link>
                    <Link style={navStyle} to="/basket">
                        <li>Nazwa Z-A</li>
                    </Link>
                    <Link style={navStyle} to="/basket">
                        <li>Cena rosnąco</li>
                    </Link>
                    <Link style={navStyle} to="/basket">
                        <li>Cena malejąco</li>
                    </Link>
                </ul>
                <hr className="hr" />
            </div>
        )
    }
}

export default Sidebar;
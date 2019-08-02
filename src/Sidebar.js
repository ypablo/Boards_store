import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
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
                    <li><h1>Sort:</h1></li>
                    <div style={navStyle} to="/">
                        <li>Name A-Z</li>
                    </div>
                    <div style={navStyle} to="/">
                        <li>Name Z-A</li>
                    </div>
                    <div style={navStyle} onClick={this.props.asc}>
                        <li>Price ascending</li>
                    </div>
                    <div style={navStyle} onClick={this.props.desc}>
                        <li>Price descending</li>
                    </div>
                </ul>
                <hr className="hr" />
            </div>
        )
    }
}

export default Sidebar;
import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import Home from './Home';

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: "Default parent state"
        }
        this.foo = this.foo.bind(this)
    }

    foo() {
       alert("Test")
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
                    <Link style={navStyle} to="/">
                        <li>Name A-Z</li>
                    </Link>
                    <Link style={navStyle} to="/">
                        <li>Name Z-A</li>
                    </Link>
                    <Link style={navStyle} to="/" onClick={this.props.dataFromParent}>
                        <li>Price ascending</li>
                       
                    </Link>
                    <Link style={navStyle} to="/" foo={this.foo}>
                        <li>Price descending</li>
                    </Link>
                </ul>
                <hr className="hr" />
            </div>
        )
    }
}

export default Sidebar;
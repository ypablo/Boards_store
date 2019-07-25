import React from 'react';
import './App.css';
import { Link } from "react-router-dom";


class Pagination extends React.Component {
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
            <div className="pagination">
                <span>&laquo;</span>
                <span className="active">1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>

                {/*<div className="paging">
            <Link style={navStyle} to="/">    
                    <h4>&lt;&lt;First one</h4>
                </Link>
                <Link style={navStyle} to="/">
                    <h4>&lt;Previous page</h4>
                </Link>
                <Link style={navStyle} to="/">    
                    <h4>Next page&gt;</h4>
                </Link>
                <Link style={navStyle} to="/">    
                    <h4>Last one&gt;&gt;</h4>
        </Link>*/}
            </div>
        )
    }
}

export default Pagination;
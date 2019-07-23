import React from 'react';
import { Link } from "react-router-dom";

class Navigation extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/regulamin">Regulamin</Link>
                <Link to="/kontakt">Kontakt</Link>
                <Link to="/basket">Basket</Link>

            </div>
        )
    }
}

export default Navigation;
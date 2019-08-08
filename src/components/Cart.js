import React from 'react';
import '../App.css';

class Cart extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        const navStyle = {
            height: "550px",
            width: "300px",
            margin: "5px",
            border: "1px solid #000"
        }


        return (
            < div className="container" >

                <h1>Basket</h1>
            </div >
        )
    }
}

export default Cart;
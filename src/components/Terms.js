import React from 'react';
import '../App.css';

import Product from '../Product'
import ProductForm from '../ProductForm'

class Terms extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div className="terms">
                {/*<h1>Terms and Conditions page</h1>*/}
                <ProductForm />
                <br />
                <hr />
                <Product />
            </div>
        )
    }
}

export default Terms;
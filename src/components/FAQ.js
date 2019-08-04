import React from 'react';
import '../App.css';
import { ProductConsumer } from '../context'

class FAQ extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <div >
                    <h1>FAQ page</h1>
                </div>
                <ProductConsumer>
                    {(anyvalue) => {
                        console.log(anyvalue)
                    }
                    }
                </ProductConsumer>
            </div>
        )
    }
}

export default FAQ;
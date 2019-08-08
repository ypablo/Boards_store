import React, { Component } from 'react';
import Product from './Product';
import jsonBoards from '../Boards.json';
import {ProductConsumer } from '../context'

export default class ProductList extends Component {
    state = {
        products: jsonBoards
    }

    render() {
        console.log(this.state.products)
        return (
            <div className="container">
                <ProductConsumer>
                {value => {
                    return value.products.map((product,id) => {
                        return <Product className="xxx" key={product.id} product={product}/>
                       
                       
                    })
                }}
                </ProductConsumer> 
            </div>
           
        )
    }
}

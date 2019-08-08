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
                    return value.products.map(product => {
                        return <div className="boardItems" key={product.id}>
                        <h1>{product.name}</h1>
                        <p style={{ fontStyle: "italic" }}>Price: {product.price}</p>
                        <p className="last-item">{product.last}</p>
                        <p className="new-item">{product.new}</p>
                        <img className="imgBoard" onClick={(this.routeChange)} src={product.img} alt="" />
                        <button className="addCard-btn" onClick={() => console.log("test")}>Add to cart </button>
                        </div>
                       
                       
                    })
                }}
                </ProductConsumer> 
            </div>
           
        )
    }
}

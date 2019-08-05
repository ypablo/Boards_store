import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context'
import { detailProduct } from '../detailProduct'

export default class Product extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, title, img, info, price, inCart } = value.detailProduct;
                    return (
                        <div className="ProductContainer" >
                            {/* img */}
                            <div className="ProductImg"><img className="ProdImg" src={img} alt="product" /></div>
                            <div className="ProductSummary">
                                {/* title */}
                                <div className="ProductTitle"><h1>{title}</h1></div>
                                {/* info */}
                                <div className="ProductInfo">Description: {info}</div>
                                {/* price */}
                                <div className="ProductPrice"><h3>Price: {price}</h3></div>
                                <div className="ProductButtons">
                                    <Link to="/"><button className="BackProduct-btn">Back to products</button></Link>
                                    <button className="Basket-btn" disabled={inCart ? true : false} onClick={() => {
                                        value.addToCart(id)
                                    }}>{inCart ? 'InCart' : 'Add to basket'}</button>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}

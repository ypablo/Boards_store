import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context'
import { detailProduct } from '../detailProduct'

export default class Product extends Component {
    render() {
        return (
            <ProductConsumer className="container">
                {(value) => {
                    const { id, title, img, info, price, inCart } = value.detailProduct;
                    return (
                        <div className="ProductContainer">

                            {/* title */}
                            <div className="ProductTitle">
                                <h1>{title}</h1>
                            </div>

                            <div className="ProductImgInfo">
                                {/* img */}
                                <div className="ProductImg"><img src={img} alt="product" /></div>
                                {/* info */}
                                <div className="ProductInfo">Description: {info}</div>
                            </div>
                            {/* price */}
                            <div><h1>Price: {price}</h1></div>
                            <div>
                                <Link to="/"><button className="BackProduct-btn">Back to products</button></Link>
                                <button className="Basket-btn" disabled={inCart ? true : false} onClick={() => {
                                    value.addToCart(id)
                                }}>{inCart ? 'InCart' : 'Add to basket'}</button>
                            </div>

                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}

import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context'
import { detailProduct } from '../detailProduct'

export default class Product extends Component {
    render() {
        const { id, name, img, info, price, inCart } = this.props.product; 
        return (
            <div className="ProductContainer" >
                        <ProductConsumer>
                        {value => (
                            <>
                            <div className="ProductImg"><img className="ProdImg" src={img} alt="product" onClick={() => value.handleDetail(id)}/></div>
                            <div className="ProductSummary">
                            {/* title */}
                            <div className="ProductTitle"><h1>{name}</h1></div>
                            {/* info */}
                            <div className="ProductInfo">{info}</div>
                            {/* price */}
                            <div className="ProductPrice"><h3>Price: {price}</h3></div>
                            <div className="ProductButtons">
                                <Link to="/"><button className="BackProduct-btn">Back to products</button></Link>
                                <button className="cart-btn" disabled={inCart ? true : false} onClick={() => {
                                    value.addToCart(id);
                                }}>{inCart ? (<p disabled>InCart</p>) : (<p>Add to basket</p>)}</button>
                            </div>
                            </div> 
                            </>)
                        }
                        </ProductConsumer>
                    </div>
                )   
            }}
           
        
    


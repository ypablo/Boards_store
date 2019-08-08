import React, { Component } from 'react';
import detailProduct from '../detailProduct';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
            {value => {
                    const { id, name, img, price, info, inCart} = value.detailProduct;
                
                    return (
                        <div className="ProductContainer" >
                            {/* img */}
                            <div className="ProductImg"><img className="ProdImg" src={img} alt="product" /></div>
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
                                        value.addToCart(id)
                                    }}>{inCart ? (<p disabled>InCart</p>) : (<p>Add to basket</p>)}</button>
                                </div>
                            </div>
                        </div>
                    )
                }}}
            </ProductConsumer>
               
        )
    }
}

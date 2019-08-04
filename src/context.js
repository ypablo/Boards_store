import React, { Component } from 'react'
import jsonBoards from './Boards.json';
import { detailProduct } from './detailProduct.js';


const ProductContext = React.createContext();
//Provider

//Consumer

class ProductProvider extends Component {
    state = {
        products: jsonBoards,
        detailProduct: detailProduct
    }

    handleDetail = () => {
        console.log("Details")
    }

    addToCart = (id) => {
        console.log(`Hello from add to cart.id is ${id}`);
    };

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
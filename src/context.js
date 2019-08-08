import React, { Component } from 'react'
import jsonBoards from './Boards.json';
import { detailProduct } from './detailProduct.js';


const ProductContext = React.createContext();


class ProductProvider extends Component {
    state = {
        products: jsonBoards,
        detailProduct: detailProduct
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product }
        })
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
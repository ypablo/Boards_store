import React, { Component } from 'react'
import jsonBoards from './Boards.json';


const ProductContext = React.createContext();
//Provider

//Consumer

class ProductProvider extends Component {
    state = {
        products: jsonBoards
    }

    addToCart = () => {
        console.log("Hello from add to cart");
    };

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
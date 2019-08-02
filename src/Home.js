import React from 'react';
import './App.css';
import jsonBoards from './Boards.json';
import { orderBy } from "lodash";
import Sidebar from "./Sidebar";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1,
            itemsPerPage: 4,
            boardRecords: jsonBoards,
            prices: [],
            sortParams: {
                direction: undefined
            }
            //sort: '',
            //products: [],
            //filteredProducts: []
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleSortClick = this.handleSortClick.bind(this);
        /*this.sortAscending = this.sortAscending.bind(this);
        this.sortDescending = this.sortDescending.bind(this);*/
    }
    /*
    componentDidMount() {
        let { boardRecords, prices } = this.state
        prices = boardRecords.map(item => parseFloat(item.price));
        this.setState({ prices })
    }

    sortAscending = () => {
        const { prices } = this.state;
        prices.sort((a, b) => a - b)
        this.setState({ prices })
        console.log(prices)
    }

    sortDescending = () => {
        const { prices } = this.state;
        prices.sort((a, b) => a - b).reverse()
        this.setState({ prices })
        console.log(prices)
    }
    */
	/*
    boardRecords = () => {
        this.setState(state => {
            if (state.sort !== '') {
                state.products.sort((a, b) =>
                    (state.sort === 'lowestprice'
                        ? ((a.price > b.price) ? 1 : -1)
                        : ((a.price < b.price) ? 1 : -1)));
            } else {
                state.products.sort((a, b) => (a.id > b.id) ? 1 : -1);
            }
            return { filteredProducts: state.products };
        })
    }
    handleSortChange = (e) => {
        this.setState({ sort: e.target.value });
        this.boardRecords();
    }
    */
    //----
    handleSortClick = () => {
        const { boardRecords, sortParams: { direction } } = this.state;
        // Check, what direction now should be
        const sortDirection = direction === "desc" ? "asc" : "desc";
        // Sort collection  
        const sortedCollection = orderBy(boardRecords, item => parseFloat(item.price), [sortDirection]);
        //Update component state with new data
        this.setState({
            boardRecords: sortedCollection, sortParams: { direction: sortDirection }
        });
    }
    //-----------

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }


    render() {

        const navStyle = {
            height: "550px",
            width: "300px",
            margin: "5px",
            border: "1px solid #000",
            objectFit: "cover"
        }

        // Logic for displaying current items
        const { boardRecords, currentPage, itemsPerPage } = this.state;
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = boardRecords.slice(indexOfFirstItem, indexOfLastItem);


        const renderItems = currentItems.map((item, index) => {
            return <div className="boardItems" key={index}>
                <h1>{item.name}</h1>
                <p>Price: {item.price}</p>
                <img style={navStyle} src={item.img} alt="" />
                <p className="last-item">{item.last}</p>
                <p className="new-item">{item.new}</p>
                <button className="addCard_btn" onClick={(e) => this.props.handleAddToCart(e, item)}>Add to cart</button>

            </div>

        })


        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(boardRecords.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li className="pagination-span" key={number} id={number} onClick={this.handleClick}>
                    {number}
                </li>
            );
        });


        

        return (

            <div>
                <div className="home">
                    {renderItems}
                </div>
                <div className="pagination">
                    {renderPageNumbers}
                    <button onClick={this.handleSortClick}>Name asc - desc</button>
                    <button onClick={this.handleSortClick}>Price asc - desc</button>
                    <button onClick={this.props.dataFromParent}>Napis</button>
                </div>
            </div >
        )
    }
}

export default Home;
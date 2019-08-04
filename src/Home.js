import React from 'react';
import './App.css';
import jsonBoards from './Boards.json';
import { orderBy } from "lodash";
import { withRouter } from 'react-router-dom';
import { ProductConsumer } from './context';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inBasket: 0,
            currentPage: 1,
            itemsPerPage: 4,
            boardRecords: jsonBoards,
            prices: [],
            sortParams: {
                direction: undefined
            }
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSortPriceAsc = this.handleSortPriceAsc.bind(this);
        this.handleSortPriceDesc = this.handleSortPriceDesc.bind(this);
        this.handleSortNameAsc = this.handleSortNameAsc.bind(this);
        this.handleSortNameDesc = this.handleSortNameDesc.bind(this);
        this.routeChange = this.routeChange.bind(this);
    }
    routeChange() {
        let path = `/product`;
        this.props.history.push(path);
    }
    handleSortNameAsc() {
        const { boardRecords } = this.state;
        const sortedCollection = orderBy(boardRecords, ['id'], ['asc']);
        this.setState({ boardRecords: sortedCollection, sortParams: "asc" })
    }
    handleSortNameDesc() {
        const { boardRecords } = this.state;
        const sortedCollection = orderBy(boardRecords, ['id'], ['desc']);
        this.setState({ boardRecords: sortedCollection, sortParams: "desc" })
    }
    handleSortPriceAsc() {
        const { boardRecords } = this.state;
        const sortedCollection = orderBy(boardRecords, item => parseFloat(item.price), ['asc']);
        this.setState({ boardRecords: sortedCollection, sortParams: "asc" })
    }
    handleSortPriceDesc() {
        const { boardRecords } = this.state;
        const sortedCollection = orderBy(boardRecords, item => parseFloat(item.price), ['desc']);
        this.setState({ boardRecords: sortedCollection, sortParams: "desc" })
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    handleAddToCart() {
        console.log("AddToCart")
    }

    render() {

        const { boardRecords, currentPage, itemsPerPage } = this.state;
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = boardRecords.slice(indexOfFirstItem, indexOfLastItem);

        const renderItems = currentItems.map((item, index) => {
            return <div className="boardItems" key={index}>
                <h1>{item.name}</h1>
                <p style={{ fontStyle: "italic" }}>Price: {item.price}</p>
                <p className="last-item">{item.last}</p>
                <p className="new-item">{item.new}</p>

                <img className="imgBoard" onClick={(this.routeChange)} src={item.img} alt="" />

                <button className="addCard-btn" onClick={(e) => this.props.handleAddToCart(e, item)}>Add to cart </button>

            </div >

        })

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
            <div className="container">
                <div className="sidebar">
                    <ul className="bar-list">
                        <li><h1>Sort:</h1></li>
                        <div onClick={this.handleSortNameAsc}>
                            <li>Name A-Z</li>
                        </div>
                        <div onClick={this.handleSortNameDesc}>
                            <li>Name Z-A</li>
                        </div>
                        <div onClick={this.handleSortPriceAsc}>
                            <li>Price ascending</li>
                        </div>
                        <div onClick={this.handleSortPriceDesc}>
                            <li>Price descending</li>
                        </div>
                    </ul>
                    <hr className="hr" />
                </div>
                <div className="subContainer">
                    <div className="product">
                        {renderItems}
                    </div>
                    <div className="pagination">
                        {renderPageNumbers}
                    </div>
                </div>
            </div >
        )
    }
}

export default Home;
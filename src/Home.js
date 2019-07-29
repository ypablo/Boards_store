import React from 'react';
import './App.css';
import jsonBoards from './Boards.json';


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1,
            itemsPerPage: 4,
            boardRecords: jsonBoards,
            prices: [],
        };
        this.handleClick = this.handleClick.bind(this);
        this.sortAscending = this.sortAscending.bind(this);
        this.sortDescending = this.sortDescending.bind(this);
    }

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
            border: "1px solid #000"
        }

        // Logic for displaying current items
        const { boardRecords, currentPage, itemsPerPage } = this.state;
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = boardRecords.slice(indexOfFirstItem, indexOfLastItem);

        const renderItems = currentItems.map((item, index) => {
            return <div key={index}>
                <h1>{item.name}</h1>
                <p>Price: {item.price}</p>
                <img style={navStyle} src={item.img} alt="" />
                <p className="last-item">{item.last}</p>
                <p className="new-item">{item.new}</p>
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
                    <button onClick={this.sortAscending}>asc</button>
                    <button onClick={this.sortDescending}>desc</button>
                </div>
            </div >
        )
    }
}

export default Home;
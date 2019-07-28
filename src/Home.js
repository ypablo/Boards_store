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
            direction: {
                price: "asc"
            }
        };
        this.handleClick = this.handleClick.bind(this);
        this.sortBy = this.sortBy.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    sortBy(key) {
        console.log(key)
        this.setState({
            boardRecords: jsonBoards.sort((a, b) =>
                this.state.direction[key] === "asc"
                    ? parseFloat(a[key]) - parseFloat(b[key])
                    : parseFloat(b[key]) - parseFloat(a[key])
            ),
            direction: {
                [key]: this.state.direction[key] === "asc" ? "desc" : "asc"
            }
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

        /*
        const renderSort = boardRecords.sort((a, b) => {
            const isReversed = (this.state.direction === 'asc') ? 1 : -1;
            return isReversed * a.name.localeCompare(b.name)
        });
       */

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
                    <button onClick={this.sortBy}>PRICE ASC</button>
                </div>
            </div >
        )
    }
}

export default Home;
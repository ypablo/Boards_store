import React from 'react';
import './App.css';
import './Home';


class Pagination extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {  
        const navStyle = {
            color: "white",
            textDecoration: "none"
        }

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.boardRecords.length / this.props.itemsPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <div className="pagination" key={number} id={number} onClick={this.props.handleClick}> 
                   {number}          
                </div>
            )
        }
    },
}

export default Pagination;
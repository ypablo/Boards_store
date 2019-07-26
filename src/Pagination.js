import React from 'react';
import './App.css';
import './Home';


class Pagination extends React.Component {
    constructor() {
        super()
        this.state = {}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
    }


    render() {  
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.boardRecords.length / this.props.itemsPerPage); i++) {
          pageNumbers.push(i);
        }

        /*const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li className="pagination" key={number} onClick={this.props.handleClick}> 
                   {number}          
                </li>
            )
        })*/
        return (
            <div className="pagination">
            {pageNumbers.map((number) => {
             return <div className="pagination-span" key={number} onClick={this.handleClick}>
                {number}
              </div>
            })}
            </div>
          )
    }
}

export default Pagination;
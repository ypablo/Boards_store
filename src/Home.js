import React from 'react';
import './App.css';
import jsonBoards from './Boards.json';
import Pagination from "./Pagination"


class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            currentPage: 1,
            itemsPerPage: 4,
            boardRecords: jsonBoards
        };
        this.handleClick = this.handleClick.bind(this);
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
        
        const { boardRecords, currentPage, itemsPerPage } = this.state;

        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = boardRecords.slice(indexOfFirstItem, indexOfLastItem);

        return (
            <div>
                <div className="home">
                    {currentItems.map((item, index) => {
                        return <div key={index}>
                            <h1>{item.name}</h1>
                            <p>Price: {item.price}</p>
                            <img style={navStyle} src={item.img} alt="" />
                            <p>{item.last}</p>
                            <p>{item.new}</p>
                        </div>
                    })}
                </div>
                <Pagination boardRecords={this.state.boardRecords} itemsPerPage={this.state.itemsPerPage}/>
            </div >
        )
    }
}

export default Home;
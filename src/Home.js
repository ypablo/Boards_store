import React from 'react';
import './App.css';
import jsonBoards from './Boards.json';
import Pagination from "./Pagination"


class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            numberOfPages: 2,
            numberOfProducts: jsonBoards.length,
            setNumberOfProducts: [],
            recordsPerPage: 4,
            setRecordsPerPage: 4,
            currentPage: 1,
            setCurrentPage: 1
        }
    }


    render() {
        const navStyle = {
            height: "550px",
            width: "300px",
            margin: "5px",
            border: "1px solid #000"
        }

        const iLastRecord = this.state.currectpage * this.state.recordsPerPage;
        const iFirstRecord = iLastRecord - this.state.recordsPerPage;
        const currentRecords = this.state.numberOfProducts.slice(iFirstRecord, iLastRecord);



        return (
            <div>
                <div className="home">
                    {jsonBoards.map((item, index) => {
                        return <div key={index}>
                            <h1>{item.name}</h1>
                            <p>Price: {item.price}</p>
                            <img style={navStyle} src={item.img} alt="" />
                            <p>{item.last}</p>
                            <p>{item.new}</p>
                        </div>
                    })}
                </div>
                <Pagination />
            </div >
        )
    }
}

export default Home;
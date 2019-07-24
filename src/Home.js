import React from 'react';
import './App.css';
import board01 from './img/board01.jpg';
import board02 from './img/board02.jpg';
import board03 from './img/board03.jpg';
import board04 from './img/board04.jpg';
import jsonBoards from './Boards.json';


class Home extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        const navStyle = {
            height: "400px",
            width: "400px"
        }

        return (
            <div className="home">
                {jsonBoards.map((item, index) => {
                    return <div>
                        <h1>{item.name}</h1>
                        <p>{item.price}</p>
                        <img src={item.img} alt=""/>
                    </div>
                    }
                )}


               {/* <div>
                    <ul>
                        <li><img src={board01} alt="baord01" style={navStyle} /></li>
                        <li><img src={board02} alt="board02" style={navStyle} /></li>
                        <li><img src={board03} alt="board03" style={navStyle} /></li>
                        <li><img src={board04} alt="board04" style={navStyle} /></li>
                    </ul>
                </div >
                <div>
                    <ul>
                        <li><img src={board04} alt="board04" style={navStyle} /></li>
                        <li><img src={board03} alt="board03" style={navStyle} /></li>
                        <li><img src={board02} alt="board02" style={navStyle} /></li>
                        <li><img src={board01} alt="board01" style={navStyle} /></li>
                    </ul>
               </div>*/}
            </div>
        )
    }
}

export default Home;
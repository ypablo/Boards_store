import React from 'react';
import './App.css';
import board01 from './board01.jpg';
import board02 from './board02.jpg';
import board03 from './board03.jpg';
import board04 from './board04.jpg';



class Home extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        const navStyle = {
            height: "200px",
            width: "400px"
        }
        return (
            <div className="home">
                <div>
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
                </div>
            </div>
        )
    }
}

export default Home;
import React from "react";

const Main = props => {

    const easyBoard = () => {
        return <div className="board" id="easy-board">
            <div className="game-piece" id="easy-red">easy red</div>
            <div className="game-piece" id="easy-blue">easy blue</div>
        </div>
    }

    return <div id="main-section">
        <div className="container" id="board-and-title">
            <h3>Click The Colors In Order</h3>
        </div>
    </div>
}

export default Main
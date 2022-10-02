import React from "react";

const Hard = props => {
    const hardBoard = () => {
        return <div className="board" id="hard-board">
            <div className="game-piece red" id="med-red"></div>
            <div className="game-piece blue" id="med-blue"></div>
            <div className="game-piece yellow" id="med-yellow"></div>
            <div className="game-piece green" id="med-green"></div>
            <div className="game-piece orange" id="med-orange"></div>
            <div className="game-piece purple" id="med-purple"></div>
        </div>
    }

    return hardBoard()
}

export default Hard
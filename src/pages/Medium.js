import React from "react";

const Medium = props => {
    const medBoard = () => {
        return <div className="board" id="med-board">
            <div className="game-piece red" id="med-red"></div>
            <div className="game-piece blue" id="med-blue"></div>
            <div className="game-piece yellow" id="med-yellow"></div>
            <div className="game-piece green" id="med-green"></div>
        </div>
    }

    return medBoard()
}

export default Medium
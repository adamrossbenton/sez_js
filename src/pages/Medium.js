import React from "react";

const Medium = props => {
    const medBoard = () => {
        return <div className="board" id="med-board">
            <div className="game-piece" id="med-red">med red</div>
            <div className="game-piece" id="med-blue">med blue</div>
            <div className="game-piece" id="med-yellow">med yellow</div>
            <div className="game-piece" id="med-green">med green</div>
        </div>
    }

    return medBoard()
}

export default Medium
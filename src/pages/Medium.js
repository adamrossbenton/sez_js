import React from "react";

const Medium = props => {
    const medBoard = () => {
        return <div className="container board-container" id="med-container">
            <div className="board" id="med-board">
                <div className="game-piece red" id="med-red"></div>
                <div className="game-piece blue" id="med-blue"></div>
                <div className="game-piece yellow" id="med-yellow"></div>
                <div className="game-piece green" id="med-green"></div>
            </div>
            <form><button className="start-button" id="med-start" type="submit">START</button></form>
        </div>
    }

    return medBoard()
}

export default Medium
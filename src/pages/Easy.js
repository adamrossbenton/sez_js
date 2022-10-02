import React from "react";

const Easy = props => {
    const easyBoard = () => {
        return <div className="board" id="easy-board">
            <div className="game-piece" id="easy-red">easy red</div>
            <div className="game-piece" id="easy-blue">easy blue</div>
        </div>
    }

    return easyBoard()
}

export default Easy
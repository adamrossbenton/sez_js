import React from "react";

const Easy = props => {
    const easyBoard = () => {
        return <div className="board" id="easy-board">
            <div className="game-piece red" id="easy-red"></div>
            <div className="game-piece blue" id="easy-blue"></div>
        </div>
    }

    return easyBoard()
}

export default Easy
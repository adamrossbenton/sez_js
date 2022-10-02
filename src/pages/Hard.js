import React from "react";

const Hard = props => {
    const hardBoard = () => {
        return <div className="board" id="hard-board">
            <div className="game-piece" id="med-red">hard red</div>
            <div className="game-piece" id="med-blue">hard blue</div>
            <div className="game-piece" id="med-yellow">hard yellow</div>
            <div className="game-piece" id="med-green">hard green</div>
            <div className="game-piece" id="med-orange">hard orange</div>
            <div className="game-piece" id="med-purple">hard purple</div>
        </div>
    }

    return hardBoard()
}

export default Hard
import React from "react";

const Main = props => {

    const easyBoard = () => {
        return <div className="board" id="easy-board">
            <div className="game-piece" id="easy-red">easy red</div>
            <div className="game-piece" id="easy-blue">easy blue</div>
        </div>
    }

    const medBoard = () => {
        return <div className="board" id="med-board">
            <div className="game-piece" id="med-red">med red</div>
            <div className="game-piece" id="med-blue">med blue</div>
            <div className="game-piece" id="med-yellow">med yellow</div>
            <div className="game-piece" id="med-green">med green</div>
        </div>
    }

    const hardBoard = () => {
        return <div className="board" id="hard-board">
            <div className="game-piece" id="med-red">med red</div>
            <div className="game-piece" id="med-blue">med blue</div>
            <div className="game-piece" id="med-yellow">med yellow</div>
            <div className="game-piece" id="med-green">med green</div>
            <div className="game-piece" id="med-orange">med orange</div>
            <div className="game-piece" id="med-purple">med purple</div>
        </div>
    }

    const diffSelect = () => {
        
    }

    const chosenBoard = diff => {
        const diffInput = diff.toLowerCase()
        switch (diffInput) {
            case "easy":
                easyBoard()
                break;
            case "medium":
                medBoard()
                break;
            case "hard":
                hardBoard()
                break;
            default:
        }
    }

    return <div id="main-section">
        <div className="container" id="board-and-title">
            <h3>Click The Colors In Order</h3>
        </div>
    </div>
}

export default Main
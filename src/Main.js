import React, {useState} from "react";

const Main = props => {

    // Difficulty state
    const [difficulty, setDifficulty] = useState()

    console.log(difficulty)

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
            <div className="game-piece" id="med-red">hard red</div>
            <div className="game-piece" id="med-blue">hard blue</div>
            <div className="game-piece" id="med-yellow">hard yellow</div>
            <div className="game-piece" id="med-green">hard green</div>
            <div className="game-piece" id="med-orange">hard orange</div>
            <div className="game-piece" id="med-purple">hard purple</div>
        </div>
    }

    const diffSelect = () => {
        return <div className="container" id="diff-select">
            <h3>Choose Difficulty</h3>
            <div className="container" id="diff-choices">
                <button>EASY</button>
                <button>MEDIUM</button>
                <button>HARD</button>
            </div>
        </div>
    }

    const chosenBoard = diff => {
        switch (difficulty) {
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
            {difficulty? chosenBoard(difficulty) : diffSelect()}
        </div>
    </div>
}

export default Main
import React from "react";
import GameHooks from "../hooks/GameHooks";

const Hard = props => {
    const hardBoard = () => {

        const {playGame} = GameHooks()

        const handleSubmit = e => {
            e.preventDefault()
            playGame("hard")
        }
    
        return <div className="container board-container" id="hard-container">
            <div className="board" id="hard-board">
                <div className="game-piece red" id="med-red"></div>
                <div className="game-piece blue" id="med-blue"></div>
                <div className="game-piece yellow" id="med-yellow"></div>
                <div className="game-piece green" id="med-green"></div>
                <div className="game-piece orange" id="med-orange"></div>
                <div className="game-piece purple" id="med-purple"></div>
                <form onSubmit={handleSubmit}><button className="start-button" id="hard-start" type="submit">START</button></form>
            </div>
        </div>
    }

    return hardBoard()
}

export default Hard
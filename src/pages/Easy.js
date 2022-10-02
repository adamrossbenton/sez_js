import React from "react";
import GameHooks from "../hooks/GameHooks";

const Easy = props => {

    const {playGame} = GameHooks()

    const handleSubmit = e => {
        e.preventDefault()
        playGame("easy")
    }

    const easyBoard = () => {
        return <div className="container board-container" id="easy-container">
            <div className="board" id="easy-board">
                <div className="game-piece red" id="easy-red"></div>
                <div className="game-piece blue" id="easy-blue"></div>
                <form onSubmit={handleSubmit}><button className="start-button" id="easy-start" type="submit">START</button></form>
            </div>
        </div>
    }

    return easyBoard()
}

export default Easy
import React from "react";
import GameHooks from "../hooks/GameHooks";

const Medium = props => {

    const {compChoose} = GameHooks()

    const handleSubmit = e => {
        e.preventDefault()
        compChoose("medium")
    }

    const medBoard = () => {
        return <div className="container board-container" id="med-container">
            <div className="board" id="med-board">
                <div className="game-piece red" id="med-red"></div>
                <div className="game-piece blue" id="med-blue"></div>
                <div className="game-piece yellow" id="med-yellow"></div>
                <div className="game-piece green" id="med-green"></div>
            </div>
            <form onSubmit={handleSubmit}><button className="start-button" id="med-start" type="submit">START</button></form>
        </div>
    }

    return medBoard()
}

export default Medium
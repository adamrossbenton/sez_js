import React from "react";
import GameHooks from "../hooks/GameHooks";

const Medium = props => {

    const {compChoose, playerChoose, notMyTurn, turnCounter} = GameHooks()

    const handleSubmit = e => {
        e.preventDefault()
        compChoose("medium")
    }

        // NOTE: onClick events each have anonymous fn that calls preventDefault and then executes player choice
        const medBoard = () => {
        return <div className="container board-container" id="med-container">
            <div className="board" id="med-board">
                <div className="game-piece red" id="med-red" onClick={e => {e.preventDefault(); playerChoose("red")}}></div>
                <div className="game-piece blue" id="med-blue" onClick={e => {e.preventDefault(); playerChoose("blue")}}></div>
                <div className="game-piece yellow" id="med-yellow" onClick={e => {e.preventDefault(); playerChoose("yellow")}}></div>
                <div className="game-piece green" id="med-green" onClick={e => {e.preventDefault(); playerChoose("green")}}></div>
            </div>
            <form onSubmit={handleSubmit}><button className="start-button" id="med-start" type="submit">START</button></form>
        </div>
    }

    return medBoard()
}

export default Medium
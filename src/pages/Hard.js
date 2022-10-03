import React from "react";
import GameHooks from "../hooks/GameHooks";

const Hard = props => {
    const hardBoard = () => {

        // TODO: pass GameHooks as props through Outlet in Main.js instead of importing to each of my board pages
        const {compChoose, playerChoose, notMyTurn, turnCounter} = GameHooks()

        const handleSubmit = e => {
            e.preventDefault()
            compChoose("hard")
        }

        const playButton = () => {
            if (notMyTurn) {
                return <form onSubmit={handleSubmit}><button className="start-button" id="hard-start" type="submit">START</button></form>
            }
        }
    
        // NOTE: onClick events each have anonymous fn that calls preventDefault and then executes player choice
        return <div className="container board-container" id="hard-container">
            <div className="board" id="hard-board">
                <div className="game-piece red" id="hard-red" onClick={e => {e.preventDefault(); playerChoose("red")}}></div>
                <div className="game-piece blue" id="hard-blue" onClick={e => {e.preventDefault(); playerChoose("blue")}}></div>
                <div className="game-piece yellow" id="hard-yellow" onClick={e => {e.preventDefault(); playerChoose("yellow")}}></div>
                <div className="game-piece green" id="hard-green" onClick={e => {e.preventDefault(); playerChoose("green")}}></div>
                <div className="game-piece orange" id="hard-orange" onClick={e => {e.preventDefault(); playerChoose("orange")}}></div>
                <div className="game-piece purple" id="hard-purple" onClick={e => {e.preventDefault(); playerChoose("purple")}}></div>
            </div>
            {playButton()}
        </div>
    }

    return hardBoard()
}

export default Hard
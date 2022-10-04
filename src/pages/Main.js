import React from "react";
import {Outlet, Link} from "react-router-dom"
import GameHooks from "../hooks/GameHooks.js";

const Main = props => {

    const {compChoose, playerChoose, turn, turnCounter} = GameHooks()

    const diffSelect = () => {
        return <div className="container" id="diff-select">
            <Outlet 
                compChoose = {compChoose}
                playerChoose = {playerChoose}
                turn = {turn}
                turnCounter = {turnCounter}
            />            
            <h3>Choose Difficulty</h3>
            <div className="container" id="diffs">
                <Link to={"/easy"}>EASY</Link>
                <Link to={"/medium"}>MEDIUM</Link>
                <Link to={"/hard"}>HARD</Link>
            </div>
            <Link to={"/"}>RESET</Link>
        </div>
    }

    return <div id="main-section">
        <div className="container" id="board-and-title">
            {diffSelect()}
        </div>
    </div>
}

export default Main
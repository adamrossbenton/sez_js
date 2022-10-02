import React from "react";


const Main = props => {

    const diffSelect = () => {
        return <div className="container" id="diff-select">
            <h3>Choose Difficulty</h3>
            <div className="container" id="diff-choices">
                <form className="diff-choice">
                    <button type="submit"></button>
                </form>
            </div>
        </div>
    }

    return <div id="main-section">
        <div className="container" id="board-and-title">
            <h3>Click The Colors In Order</h3>
        </div>
    </div>
}

export default Main
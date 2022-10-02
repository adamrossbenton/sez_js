import React, {useState} from "react";

const GameHooks = props => {

    const computerChoices = []
    const playerChoice = []

    const playGame = diff => {
        console.log(`Playing game on ${diff}`)
    }

    return {
        playGame
    }
}

export default GameHooks
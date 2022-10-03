import React, {useState} from "react";

const GameHooks = props => {

    const colorChoices = ["red", "blue", "yellow", "green", "orange", "purple"]
    const computerChoices = []
    const playerChoices = []
    let turnCounter = 0
    let difficulty = ""
    let turnPass = false

    const compChoose = diff => {

        
        let nextColor = 0

        switch (diff) {
            case "easy":
                nextColor = Math.floor(Math.random()*2)
                break;
            case "medium":
                nextColor = Math.floor(Math.random() * 4)
                break;
            case "hard":
                nextColor = Math.floor(Math.random() * 6)
                break;
            default:
        }
        computerChoices.push(colorChoices[nextColor])
        console.log(computerChoices)
    }

    const playerChoose = choice => {
        let choiceCounter = 0
        playerChoices.push(choice)
        console.log(playerChoices)
        if (playerChoices[choiceCounter] === computerChoices[choiceCounter]) {
            if (choiceCounter+1 === computerChoices.length) {
                console.log("Correct")
                turnPass = true
                turnCounter++
            }
        }

    }

    return {
        compChoose,
        playerChoose,
    }
}

export default GameHooks
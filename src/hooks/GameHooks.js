import React, {useState} from "react";

const GameHooks = props => {

    const colorChoices = ["red", "blue", "yellow", "green", "orange", "purple"]
    const computerChoices = []
    const playerChoices = []
    let turnCounter = 0
    let choiceCounter = 0
    let difficulty = ""
    let turnPass = true

    const compChoose = diff => {

        // Add a random color choice to computer selection array
        let nextColor = 0

        // Randomization possibilitites based on selected difficulty level
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
        playerChoices.length = 0
        choiceCounter = 0
        turnPass = false
    }

    const playerChoose = choice => {
        if (!turnPass) {
            console.log(`Player chose ${choice}`)
            console.log(`Computer choices are ${computerChoices}`)
            playerChoices.push(choice)
            console.log(playerChoices)
            if (playerChoices[choiceCounter] === computerChoices[choiceCounter]) {
                if (choiceCounter+1 === computerChoices.length) {
                    console.log("Correct")
                    turnPass = true
                    turnCounter++
                }
            }
            choiceCounter++
        }
    }

    return {
        compChoose,
        playerChoose,
        turnPass,
        turnCounter,
    }
}

export default GameHooks
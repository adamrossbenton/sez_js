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

        // Push the randomly selected color to computer choices array
        computerChoices.push(colorChoices[nextColor])
        console.log(computerChoices)

        // Reset player game state, pass turn to player
        playerChoices.length = 0
        choiceCounter = 0
        turnPass = false
    }

    const playerChoose = choice => {
        
        // Checks to see if it is the player's turn
        if (!turnPass) {
            console.log(`Player chose ${choice}`)
            console.log(`Computer choices are ${computerChoices}`)
            
            // Adds clicked choice to player choices array
            playerChoices.push(choice)
            console.log(playerChoices)

            // Checks to see if arrays match (win/loss/continue)
            // Check to see if player's current choice is correct
            if (playerChoices[choiceCounter] === computerChoices[choiceCounter]) {
                // Check to see if all choices have been made (should all be correct)
                if (choiceCounter+1 === computerChoices.length) {
                    console.log("Correct")
                    turnPass = true
                    turnCounter++
                }
            // If player chooses wrong answer
            } else {
                console.log("Fail")
                turnPass = true
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
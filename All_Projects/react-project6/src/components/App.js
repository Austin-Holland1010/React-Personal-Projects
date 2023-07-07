import React from "react";
import Die from "./Die";

export default function App() {
    const[dice, setDice] = React.useState(allNewDice())

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: i
            })
        }
        return newDice
    }

    function rollDice() {
        setDice(prevDice => {
            const newDice = allNewDice()
            return (newDice)
        })
    }
    //console.log(dice)

    const diceElements = dice.map(
        die => <Die key={die.id} value={die.value} isHeld={die.isHeld} />)

    return (
        <main className="game-box">
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}
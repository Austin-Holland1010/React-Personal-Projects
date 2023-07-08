import React from "react";
import Die from "./Die";
import Confetti from "react-confetti"
import useWindowSize from "react-use/lib/useWindowSize"

export default function App() {
    const[dice, setDice] = React.useState(allNewDice())
    const[tenzies, setTenzies] = React.useState(false)
    const { width, height } = useWindowSize()
    
    React.useEffect(() => {
        let valueArr = dice.map(a => a.value)
        const allEqual = arr => arr.every( v => v === arr[0] )
        let sameValue = allEqual(valueArr)
        let heldArr = dice.map(die => die.isHeld)
        let allHeld = allEqual(heldArr)
        
        if(sameValue === true && allHeld === true && dice[0].isHeld === true)
        {
            setTenzies(true)
            //console.log("You Won")
        }
        else
        {
            setTenzies(false)
        }
    }, [dice])
    
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
        /*setDice(prevDice => {
            const newDice = allNewDice()
            return (newDice)
        })
        */
       setDice(oldDice => oldDice.map(die => {
        return !die.isHeld ? { ...die, value: Math.ceil(Math.random() * 6)} :
        die  
        }))

        if(tenzies)
        {
            setDice(prevDice => {
                const newDice = allNewDice()
                return newDice
            })
        }
    }

    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    
        //console.log(id)
        /*dice.map(currentDie => {
            if(currentDie.id === id)
            {
                setDice(prevSetOfDice => {
                    const newDie = {
                        ...currentDie,
                        isHeld: !currentDie.isHeld
                    }
                    const tempDice = dice
                    tempDice[id] = newDie
                    console.log(id +" "+ newDie.isHeld + " " + tempDice[id].isHeld)
                    return tempDice
                }) 
            }
            
        })*/
    }

    const diceElements = dice.map(
        die => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />)

    return (
        <main className="game-box">
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        </main>
    )
}
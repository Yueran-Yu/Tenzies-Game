import React, {useEffect, useState} from 'react';
import './App.css';
import DieComponent from "./Die";
import {DiceContainer, InstructionsContainer, RollDiceBtn, TitleContainer} from './styles';
import {nanoid} from 'nanoid';
import Confetti from "react-confetti";

const App = (): JSX.Element => {
	const generateNewDie = (): DieProps => {
		const randomNum = Math.ceil(Math.random() * 6)
		return {
			id: nanoid(),
			value: randomNum,
			isHeld: false,
			handleHeld: () => {}
		}
	}
	const allNewDice: NewDiceProps = () => {
		let newDice = []
		for (let i = 0; i < 10; i++) {
			newDice.push(generateNewDie())
		}
		return newDice
	}

	// set initial state when the app render the first time
	// as soon as the component loads, it will generate all new dice for us.
	const [dice, setDice] = useState(allNewDice())
	const [tenzies, setTenzies] = useState(false)

	const handleRollDice = () => {
		if (!tenzies) {
			setDice(dice.map(
				die => die.isHeld ? die : generateNewDie()
			))
		} else {
			setTenzies(false)
			setDice(allNewDice())
		}
	}

	const handleHeld = (id: string) => {
		setDice(dice.map(die => die.id === id ? {...die, isHeld: !die.isHeld} : die))
	}

	useEffect(() => {
		let allHeld = dice.every(die => die.isHeld)
		const firstValue = dice[0].value
		let allSameValue = dice.every(die => die.value === firstValue)
		if (allHeld && allSameValue) setTenzies(true)

	}, [dice])


	return (
		<div className="App">
			{tenzies && <Confetti/>}
			<TitleContainer>Tenzies</TitleContainer>
			<InstructionsContainer>Roll until all dice are the same. Click each die to freeze it at its current value
				between rolls.</InstructionsContainer>
			<DiceContainer>
				{
					dice.map(({id, value, isHeld}) => <DieComponent id={id} key={id} value={value} isHeld={isHeld}
																													handleHeld={handleHeld}/>)
				}
			</DiceContainer>
			<RollDiceBtn onClick={handleRollDice}>
				{
					tenzies ? "New Game" : "Roll"
				}
			</RollDiceBtn>
		</div>
	);
}

export default App;

import React, {useState} from 'react';
import './App.css';
import DieComponent from "./Die";
import {DiceContainer} from './styles';

const App = () => {

	// set initial state when the app render the first time
	// as soon as the component loads, it will generate all new dice for us.
	const [dice, setDice] = useState(allNewDice())


	const allNewDice: NewDiceProps = () => {
		let arr = []
		for (let i = 0; i < 10; i++) {
			const randomNum = Math.ceil(Math.random() * 6)
			arr.push(randomNum)
		}
		return arr
	}


	return (
		<div className="App">
			<h1>Tenzies</h1>
			<p>Roll </p>
			<DiceContainer>
				{
					dice.map((num: number, index: number) => <DieComponent key={index} value={num}/>)
				}
			</DiceContainer>
		</div>
	);
}

export default App;

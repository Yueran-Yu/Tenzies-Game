### Learning something

#### Snippet 1:

```typescript
const App = () => {
	const [dice, setDice] = useState(allNewDice())

	function allNewDice() {
		let arr = []
		for (let i = 0; i < 10; i++) {
			const randomNum = Math.ceil(Math.random() * 6)
			arr.push(randomNum)
		}
		return arr
	}
}
```

#### Snippet 2:

```typescript
const App = () => {
	const allNewDice: NewDiceProps = () => {
		let arr = []
		for (let i = 0; i < 10; i++) {
			const randomNum = Math.ceil(Math.random() * 6)
			arr.push(randomNum)
		}
		return arr
	}
	const [dice, setDice] = useState(allNewDice())
}
```

- When using Snippet 2 (the arrow function) we can't put the allNewDice function above the useState hook, it will show
  the error message:

```
    TS2448: Block-scoped variable 'allNewDice' used before its declaration.  
    App.tsx(13, 8): 'allNewDice' is declared here.
    TS2454: Variable 'allNewDice' is used before being assigned.
```

- Snippet 1 is Hoisting.
- It is called HOISTING - Invoking (calling) a function before it has been defined.

[Read More: Why can I use a function before it's defined in JavaScript?](https://stackoverflow.com/questions/261599/why-can-i-use-a-function-before-its-defined-in-javascript#:~:text=Is%20hoisting%20actually%20%22calling%20the,it's%20declared%2C%20and%20that's%20hoisting.)



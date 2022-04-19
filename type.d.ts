interface DieProps {
	id: string
	value: number
	isHeld: boolean
	handleHeld: (id:string)=>void
}

interface NewDiceProps{
	(): DieProps[]
}


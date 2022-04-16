import styled from 'styled-components';

export const DiceContainer = styled.div`
  display: grid;
  grid-template: auto auto / repeat(5, 1fr);
	gap:20px;
`

export const DieFace = styled.div`
  height: 50px;
  width: 50px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
	cursor: pointer;
	background-color: white;
`

export const DieNum = styled.h2`
	font-size: 2rem;
`
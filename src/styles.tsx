import styled from 'styled-components';

export const DiceContainer = styled.div`
  display: grid;
  grid-template: auto auto / repeat(5, 1fr);
  gap: 20px;
`

export const DieFace = styled.div<{ isHeld: boolean }>`
  height: 50px;
  width: 50px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({isHeld}) => isHeld ? "#39ba68" : "white"};
  color: ${({isHeld}) => isHeld ? "white" : "#3b3939"};
`

export const DieNum = styled.h2`
  font-size: 2rem;
`

export const RollDiceBtn = styled.button`
  margin-top: 40px;
  height: 50px;
  border: none;
	padding: 0 20px;
  border-radius: 6px;
  background-color: #5035FF;
  color: white;
  font-size: 1.2rem;
  font-family: 'Karla', sans-serif;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:active {
    box-shadow: inset 5px 5px 10px -3px rgba(0, 0, 0, 0.7);
  }
`

export const TitleContainer = styled.h1`
  font-size: 40px;
  margin: 0;
`

export const InstructionsContainer = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  margin: 40px 30px;
  text-align: center;
`
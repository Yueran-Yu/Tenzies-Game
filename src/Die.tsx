import React, {FC} from 'react';
import {DieFace, DieNum} from './styles';

const DieComponent: FC<DieProps> = ({id, value, isHeld, handleHeld}) => {

	return (
		<DieFace isHeld={isHeld} onClick={() => handleHeld(id)}>
			<DieNum>{value}</DieNum>
		</DieFace>
	)
}

export default DieComponent;

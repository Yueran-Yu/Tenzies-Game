import React from 'react';
import { DieFace, DieNum } from './styles';

const DieComponent = ({value}: DieProps) => {
	return (
		<DieFace>
		 <DieNum>{value}</DieNum>
		</DieFace>
	)
}

export default DieComponent;

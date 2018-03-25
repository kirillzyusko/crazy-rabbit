import React from 'react';
import Svg, {
	Path,
	G,
	Rect
} from 'react-native-svg';
import {levelButtonHeight} from '../../engine/constants/engine';

const Level = () => (
	<Svg>
		<G>
			<Rect
				x={0}
				y={0}
				width={levelButtonHeight}
				height={levelButtonHeight}
				stroke="#a79813"
				strokeWidth="2"
				fill="#cae781"
				fillOpacity={0.9}
			/>
		</G>
	</Svg>
);

export const Level;
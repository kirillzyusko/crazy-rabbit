import React from 'react';
import Svg, {
  Path,
  G,
  Rect
} from 'react-native-svg';
import {levelBlockWidth, levelButtonHeight} from '../../engine/constants/engine';

const Level = () => (
  <Svg width={levelBlockWidth} height={levelButtonHeight}>
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

export default Level;

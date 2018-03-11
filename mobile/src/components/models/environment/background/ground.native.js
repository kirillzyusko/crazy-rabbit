import React from 'react';
import { Rect, Line, G } from 'react-native-svg';
import {height} from "../../../../engine/constants";

const Ground = () => {
    return (
    <G id="ground">
      <Rect
        id="ground-2"
        data-name="ground"
        x={0}
        y={height-100}
        width={700}
        height={100}
        fill={'#59a941'}
      />
      <Line
        x1={0}
        y1={0}
        x2={200 / 2}
        y2={0}
        stroke={'#458232'}
        strokeWidth={'3px'}
      />
    </G>
  );
};

export default Ground;

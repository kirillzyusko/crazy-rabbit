import React from 'react';
import { Rect, Line, G } from 'react-native-svg';
import {groundHeight, height, width} from "../../../../engine/constants";

const Ground = () => {
    return (
    <G id="ground">
      <Rect
        id="ground-2"
        data-name="ground"
        x={0}
        y={groundHeight}
        width={width}
        height={100}
        fill={'#59a941'}
      />
      <Line
        x1={0}
        y1={groundHeight}
        x2={width}
        y2={groundHeight}
        stroke={'#458232'}
        strokeWidth={'3px'}
      />
    </G>
  );
};

export default Ground;

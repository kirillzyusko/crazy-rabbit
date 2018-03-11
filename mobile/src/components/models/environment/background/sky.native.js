import React from 'react';
import { Rect } from 'react-native-svg';
import {height, width} from "../../../../engine/constants";

const Sky = () => {
  return (
    <Rect
      x={0}
      y={0}
      width={width}
      height={height}
      fill={'#30abef'}
    />
  );
};

export default Sky;

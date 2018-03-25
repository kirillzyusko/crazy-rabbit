import React from 'react';
import PropTypes from 'prop-types';
import Svg, {
  G,
  Rect,
  Text
} from 'react-native-svg';
import {
  fontSize,
  levelBlockWidth,
  levelButtonHeight
} from '../../engine/constants/engine';
import Star from './star.native';

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
      <Text
        x={levelButtonHeight / 2}
        y={levelButtonHeight / 2}
        alignmentBaseline="middle"
        textAnchor="middle"
        fontSize={fontSize / 2}
      >
        {this.props.title}
      </Text>
      <Star isAchieved />
      <Star isAchieved />
      <Star isAchieved={false} />
    </G>
  </Svg>
);

Level.propTypes = {
  assessment: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isAllowed: PropTypes.bool.isRequired
};

export default Level;

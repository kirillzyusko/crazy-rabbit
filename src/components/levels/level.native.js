import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  G,
  Rect,
  Text
} from 'react-native-svg';
import { TouchableOpacity } from 'react-native';
import {
	fontSize, leftMarginLevelButton,
	levelBlockWidth,
	levelButtonHeight, levelButtonMargin, starHeight
} from '../../engine/constants/engine';
import Star from './star.native';

class Level extends PureComponent {
  render() {
    const { row, column } = this.props;

    const style = {
      position: 'absolute',
      left: leftMarginLevelButton + (levelButtonHeight + levelButtonMargin) * column,
      top: (levelButtonHeight + levelButtonMargin) * row
    };

    return (
      <TouchableOpacity style={style}>
        <Svg width={levelBlockWidth} height={levelButtonHeight + starHeight}>
          <G>
            <Rect
              x={0}
              y={0}
              width={levelBlockWidth}
              height={levelButtonHeight}
              stroke="#a79813"
              strokeWidth="2"
              fill="#cae781"
              fillOpacity={0.9}
            />
            <Text
              x={levelBlockWidth / 2}
              y={levelButtonHeight / 2}
              alignmentBaseline="middle"
              textAnchor="middle"
              fontSize={fontSize / 1.5}
            >
              {this.props.title}
            </Text>
            <Rect
              x={0}
              y={levelButtonHeight}
              width={levelBlockWidth}
              height={starHeight}
              stroke="#a79813"
              strokeWidth="2"
              fill="white"
              fillOpacity={0.9}
            />
            <G x={0} y={levelButtonHeight}>
              <Star isAchieved />
            </G>
            <G x={(levelButtonHeight - starHeight) / 2} y={levelButtonHeight}>
              <Star isAchieved />
            </G>
            <G x={levelButtonHeight - starHeight} y={levelButtonHeight}>
              <Star isAchieved={false} />
            </G>
          </G>
        </Svg>
      </TouchableOpacity>
	);
  }
}

Level.propTypes = {
  id: PropTypes.number.isRequired,
  startPosition: PropTypes.number.isRequired,
  assessment: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isAllowed: PropTypes.bool.isRequired,
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired
};

export default Level;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  G,
  Rect,
  Text
} from 'react-native-svg';
import {
  fontSize,
  levelButtonMarginUpside,
  levelBlockWidth,
  levelButtonHeight,
  starHeight,
  topMarginLevelButton,
  levelBlockHeight
} from '../../engine/constants/engine';
import Star from './star.native';

const SMOOTH = 10;

class Level extends PureComponent {
  render() {
    const { row, isAllowed } = this.props;

    console.log(topMarginLevelButton + (levelBlockHeight + levelButtonMarginUpside) * row);

    return (
      <Svg width={levelBlockWidth} height={levelButtonHeight + starHeight}>
        <G>
          <Rect
            x={0}
            y={levelButtonHeight - SMOOTH}
            width={levelBlockWidth}
            height={starHeight + SMOOTH}
            stroke="#c9b614"
            strokeWidth="3"
            fill="black"
            fillOpacity={0.3}
          />
          <Rect
            rx={SMOOTH}
            ry={SMOOTH}
            x={0}
            y={0}
            width={levelBlockWidth}
            height={levelButtonHeight}
            stroke="#c9b614"
            strokeWidth="3"
            fill={isAllowed ? '#cae781' : '#afafaf'}
            fillOpacity={1}
          />
          <Text
            x={levelBlockWidth / 2}
            y={levelButtonHeight / 2}
            alignmentBaseline="middle"
            textAnchor="middle"
            fill="white"
            stroke="black"
            fontWeight="bold"
            fontSize={fontSize / 1.2}
          >
            {this.props.title}
          </Text>

          <G x={SMOOTH} y={levelButtonHeight}>
            <Star isAchieved />
          </G>
          <G x={(levelBlockWidth - starHeight) / 2} y={levelButtonHeight}>
            <Star isAchieved />
          </G>
          <G x={levelBlockWidth - starHeight - SMOOTH} y={levelButtonHeight}>
            <Star isAchieved={false} />
          </G>
        </G>
      </Svg>
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

Level.defaultProps = {
  isAllowed: false
};

export default Level;

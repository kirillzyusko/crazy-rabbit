import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  G,
  Rect,
  Text
} from 'react-native-svg';
import {
  fontSize,
  levelBlockWidth,
  levelButtonHeight,
  starHeight,
  borderBlockWidth
} from '../../engine/constants/engine';
import Star from './star.native';

const SMOOTH = 10;

class Level extends PureComponent {
  render() {
    const { isAllowed, assessment } = this.props;

    return (
      <Svg width={levelBlockWidth} height={levelButtonHeight + starHeight}>
        <G>
          <Rect
            x={0}
            y={levelButtonHeight - SMOOTH}
            width={levelBlockWidth}
            height={starHeight + SMOOTH}
            stroke="#c9b614"
            strokeWidth={borderBlockWidth}
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
            strokeWidth={borderBlockWidth}
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

          {
            assessment >= 1 &&
            <G x={SMOOTH} y={levelButtonHeight}>
              <Star isAchieved />
            </G>
          }
          {
            assessment >= 2 &&
            <G x={(levelBlockWidth - starHeight) / 2} y={levelButtonHeight}>
              <Star isAchieved />
            </G>
          }
          {
            assessment >= 3 &&
            <G x={levelBlockWidth - starHeight - SMOOTH} y={levelButtonHeight}>
              <Star isAchieved={false} />
            </G>
          }
        </G>
      </Svg>
    );
  }
}

Level.propTypes = {
  assessment: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isAllowed: PropTypes.bool.isRequired
};

Level.defaultProps = {
  isAllowed: false,
  assessment: 0
};

export default Level;

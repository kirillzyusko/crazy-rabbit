import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Svg, { G, Text } from 'react-native-svg';
import {
  width,
  fontSize,
  margin
} from '../../../../engine/constants/engine';

const style = {
  position: 'absolute',
  top: margin,
  right: margin / 2
};

class Score extends PureComponent {
  render() {
    console.log('score: ', this.props.score);
    return (
      <View style={style}>
        <Svg width={4 * margin} height={fontSize}>
          <Text
            fill="white"
            stroke="white"
            fontSize={fontSize}
            fontWeight="bold"
            x={margin * 2}
            y={margin}
            textAnchor="middle"
          >
            {this.props.score}
          </Text>
        </Svg>
      </View>
    );
  }
}

Score.propTypes = {
  score: PropTypes.number.isRequired
};

Score.defaultProps = {
  score: 0
};

export default Score;

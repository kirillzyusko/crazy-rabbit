import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { G, Text } from 'react-native-svg';
import {
    width,
    fontSize,
    margin
} from "../../../../engine/constants";

class Score extends PureComponent {
    render() {
        console.log('score: ', this.props.score);
        return (
            <G>
                <Text
                    fill="gray"
                    stroke="gray"
                    fontSize={fontSize}
                    fontWeight="bold"
                    x={width - 2*margin}
                    y={fontSize + margin}
                    textAnchor="middle"
                >
                    {this.props.score}
                </Text>
            </G>
        )
    }
}

Score.propTypes = {
    score: PropTypes.number.isRequired
};

Score.defaultProps = {
    score: 0
};

export default Score;
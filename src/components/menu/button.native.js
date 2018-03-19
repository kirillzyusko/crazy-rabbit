import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Svg, {
    G,
    Text,
    Rect
} from 'react-native-svg';
import {
    buttonHeight,
    buttonWidth,
    fontSize,
    height, spaceBetweenButtons,
    width
} from "../../engine/constants";

const textStyle = {
    fontFamily: '"Joti One", cursive',
    fontSize: fontSize,
    fill: '#e3e3e3',
    cursor: 'default',
};

class Button extends PureComponent {
    render() {
        const { id, startPosition, identifier } = this.props;
        return (
            <G>
                <Rect
                    onPress={() => this.props.onClick(identifier)}
                    x={(width - buttonWidth)/2}
                    y={startPosition + spaceBetweenButtons*id + buttonHeight*id}
                    rx="5"
                    ry="5"
                    width={buttonWidth}
                    height={buttonHeight}
                    stroke="blue"
                    fill="none"
                    strokeWidth="5"
                />
                <Text
                    x={(width)/2}
                    y={startPosition + buttonHeight/2 + spaceBetweenButtons * id + buttonHeight*id}
                    alignmentBaseline="middle"
                    textAnchor="middle"
                >
                    {this.props.title}
                </Text>
            </G>
        )
    }
}

Button.propTypes = {
    id: PropTypes.number,
    startPosition: PropTypes.number,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    identifier: PropTypes.string.isRequired
};

export default Button;
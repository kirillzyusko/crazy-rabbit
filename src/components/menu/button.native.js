import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    TouchableOpacity
} from 'react-native';
import Svg, {
    G,
    Text,
    Rect
} from 'react-native-svg';
import {
    buttonHeight,
    buttonWidth,
    fontSize,
    spaceBetweenButtons,
    width
} from "../../engine/constants/engine";

class Button extends PureComponent {
    render() {
        const { id, startPosition, identifier } = this.props;
        const style = {
            position: 'absolute',
            top: startPosition + spaceBetweenButtons*id + buttonHeight*id,
            left: (width - buttonWidth)/2
        };

        return (
            <TouchableOpacity
                onPress={() => this.props.onClick(identifier)}
                style={style}
            >
                <Svg width={buttonWidth} height={buttonHeight}>
                    <G>
                        <Rect
                            x={0}
                            y={0}
                            rx="5"
                            ry="5"
                            width={buttonWidth}
                            height={buttonHeight}
                            stroke="blue"
                            fill="none"
                            strokeWidth="5"
                        />
                        <Text
                            x={buttonWidth/2}
                            y={buttonHeight/2}
                            alignmentBaseline="middle"
                            textAnchor="middle"
                            fontSize={fontSize/2}
                        >
                            {this.props.title}
                        </Text>
                    </G>
                </Svg>
            </TouchableOpacity>
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

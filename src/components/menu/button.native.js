import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { G, Text } from 'react-native-svg';
import {fontSize, height, width} from "../../engine/constants";

const textStyle = {
    fontFamily: '"Joti One", cursive',
    fontSize: fontSize,
    fill: '#e3e3e3',
    cursor: 'default',
};

class Button extends PureComponent {
    render() {
        return (
            <G onPress={()=>{console.log("i'm touched")}}>
                <Text filter="url(#shadow)" style={textStyle} x={width/2} y={height/2 + fontSize * this.props.id} onLongPress={() => alert('Press on Circle')}>{this.props.title}</Text>
            </G>
        )
    }
}

Button.propTypes = {
    id: PropTypes.number.isRequired ,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button;
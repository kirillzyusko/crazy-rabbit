import React from 'react';
import {
    G,
    Text
} from 'react-native-svg';
import {height, width} from "../../../../engine/constants/engine";

const EndGame = () => {
    return (
        <G>
            <Text
                fill="black"
                stroke="black"
                fontSize="38"
                fontWeight="bold"
                x={width/2}
                y={height/2}
                textAnchor="middle"
            >
                The End!
            </Text>
        </G>
    )
};

export default EndGame;

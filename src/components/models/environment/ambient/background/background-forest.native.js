import React, { PureComponent } from 'react';
import Svg, { Image } from 'react-native-svg';
import {height, width} from "../../../../../engine/constants/engine";
import Sky from "./components/sky.native";
import Ground from "./components/ground.native";

class BackgroundForest extends PureComponent {
    render() {
        return (
            <Svg width={width} height={height}>
                <Image
                    x="0%"
                    y="0%"
                    width={width}
                    height={height}
                    preserveAspectRatio="xMidYMid slice"
                    opacity="1"
                    href={require('./components/forest.jpg')}
                />
            </Svg>
        )
    }
}

export default BackgroundForest;

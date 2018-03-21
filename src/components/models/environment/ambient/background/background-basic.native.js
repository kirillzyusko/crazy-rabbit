import React, { PureComponent } from 'react';
import Svg from 'react-native-svg';
import {height, width} from "../../../../../engine/constants/engine";
import Sky from "./components/sky.native";
import Ground from "./components/ground.native";

class BackgroundBasic extends PureComponent {
    render() {
        return (
            <Svg width={width} height={height}>
                <Sky/>
                <Ground />
            </Svg>
        )
    }
}

export default BackgroundBasic;

import React, { PropTypes } from 'react';
import Svg from 'react-native-svg';
import Hero from "../components/models/heroes/hero.native";
import Sky from "../components/models/environment/background/sky.native";
import Ground from "../components/models/environment/background/ground.native";
import {height, width} from "../engine/constants";
import Block from "../components/models/environment/blocks/block.native";

const Canvas = (props) => {
    return (
        <Svg width={width} height={height}>
            <Sky />
            <Ground />
            <Hero action={props.action} />
            <Block />
        </Svg>
    )
};

Canvas.propTypes = {
  //action: PropTypes.string.isRequired
};

export default Canvas;
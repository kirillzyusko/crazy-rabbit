import React, { PropTypes } from 'react';
import Svg from 'react-native-svg';
import Hero from "../components/models/heroes/hero.native";
import Sky from "../components/models/environment/ambient/background/sky.native";
import Ground from "../components/models/environment/ambient/background/ground.native";
import {height, width} from "../engine/constants";
import Block from "../components/models/environment/ambient/blocks/block.native";

const Canvas = (props) => {
    return (
        <Svg width={width} height={height}>
            <Sky />
            <Ground />
            {props.blocks.map((block) => {
                return <Block key={block.createdAt} />
            })}
            <Hero action={props.action} />
        </Svg>
    )
};

Canvas.propTypes = {
  //action: PropTypes.string.isRequired
};

export default Canvas;
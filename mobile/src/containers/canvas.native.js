import React from 'react';
import PropTypes from 'prop-types';
import Svg, { G } from 'react-native-svg';
import Hero from "../components/models/heroes/hero.native";
import Sky from "../components/models/environment/ambient/background/sky.native";
import Ground from "../components/models/environment/ambient/background/ground.native";
import {height, width} from "../engine/constants";
import Block from "../components/models/environment/ambient/blocks/block.native";
import EndGame from "../components/models/environment/game/end-game.native";

const Canvas = (props) => {
    return (
        <Svg width={width} height={height}>
            <G>
                <Sky/>
                < Ground />
                {props.blocks.map((block) => {
                    return <Block key={block.createdAt}/>
                })}
                <Hero action={props.action} />
                {!props.canPlay && <EndGame/>}
            </G>
        </Svg>
    )
};

Canvas.propTypes = {
  action: PropTypes.string.isRequired
};

export default Canvas;

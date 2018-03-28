import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Svg, { G, Image } from 'react-native-svg';
import { isEqual } from 'lodash';
import { generate as UID } from 'shortid';
import Hero from "../components/models/heroes/hero.native";
import Sky from "../components/models/environment/ambient/background/components/sky.native";
import Ground from "../components/models/environment/ambient/background/components/ground.native";
import {height, width} from "../engine/constants/engine";
import Block from "../components/models/environment/ambient/blocks/block.native";
import EndGame from "../components/models/environment/game/end-game.native";
import Score from "../components/models/environment/game/score.native";
import BackgroundForest from '../components/models/environment/ambient/background/background-forest.native';

class Canvas extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return !this.isTheSameProps(nextProps);
    }

    isTheSameProps = (nextProps) => isEqual(nextProps, this.props);

    render() {
        console.log('rerender canvas');
        return (
            <View>
				<BackgroundForest/>
                <Svg width={width} height={height}>
					{!this.props.canPlay && <EndGame/>}
					<Score score={this.props.score}/>
                </Svg>
				{this.props.blocks.map((block) => {
					return <Block appearanceAt={block.appearance} key={block.id}/>
				})}
                <Hero type={this.props.heroType} action={this.props.action} />
            </View>
        )
    }
}

Canvas.propTypes = {
    action: PropTypes.string,
    score: PropTypes.number.isRequired,
    heroType: PropTypes.string.isRequired
};

export default Canvas;

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

class Canvas extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.isTheSameProps(nextProps)) return false;
        return true;
    }

    isTheSameProps = (nextProps) => isEqual(nextProps, this.props);

    render() {
        console.log('rerender canvas');
        return (
            <View>
                <Svg width={width} height={height}>
                    <G>
                        <Image
                            x="0%"
                            y="0%"
                            width={width}
                            height={height}
                            preserveAspectRatio="xMidYMid slice"
                            opacity="1"
                            href={require('../components/models/environment/ambient/background/components/forest.jpg')}
                        />
                        {/*<Sky/>
                        <Ground />*/}
                        {this.props.blocks.map((block) => {
                            return <Block id={block.createdAt} key={block.createdAt}/>
                        })}
                        {!this.props.canPlay && <EndGame/>}

                    </G>
                </Svg>
                <Hero type={this.props.heroType} action={this.props.action} />

				<Score score={this.props.score}/>
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

import React, { Component } from 'react';
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
        if (this.wasActionCleared(nextProps)) return false;
        if (this.isTheSameProps(nextProps)) return false;
        //console.log(this.props, nextProps);
        return true;
        //return !this.isTheSameState(nextProps, nextState);
    }

    isTheSameProps = (nextProps) => isEqual(nextProps, this.props);

    isTheSameState = (nextProps, nextState) => isEqual(nextProps, this.props) && isEqual(nextState, this.state);

    wasActionCleared = (nextProps) => this.props.action !== null && nextProps.action === null;

    render() {
        console.log('rerender canvas');
        return (
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
                    <Hero action={this.props.action} />
                    {!this.props.canPlay && <EndGame/>}
                    <Score score={this.props.score}/>
                </G>
            </Svg>
        )
    }
}

Canvas.propTypes = {
    action: PropTypes.string,
    score: PropTypes.number.isRequired
};

export default Canvas;

import React, { Component } from 'react';
import {
    Animated,
    Easing
} from 'react-native';
import { G } from 'react-native-svg';
import PropTypes from 'prop-types';
import { Animate } from './../../../engine/animation';
import Rabbit from './catalog/rabbit.native';
import Bear from "./catalog/bear.native";
import {
    distanceWithRespectToGround,
    downJump, height,
    heightOfJump,
    timeOfJump,
    upperJump
} from '../../../engine/constants/engine';
import { JUMP } from '../../../actions';
import {getHeroByType} from "../../../utils/hero.native";
//todo: currentHeight && futureHeight и логику с их автозамещением ставить в state компонента hero
class Hero extends Component {
    constructor() {
        super();
        this.animatedValue = new Animated.Value(0);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.action === JUMP) {
            this.animate();
        }
    }

    componentDidMount() {
        this.animatedValue.addListener((height) => {
            this._hero.setNativeProps({ matrix: [1, 0, 0, 1, 0, -height.value * heightOfJump - heightOfJump] });
        });
    }

    shouldComponentUpdate(){
        return false;
    }

    animate() {
        if(this.animatedValue._value === 0) {
            Animated.sequence([
                Animated.timing(this.animatedValue, {
                    toValue: 1,
                    duration: timeOfJump * upperJump,
                    easing: Easing.linear()
                }),
                Animated.timing(this.animatedValue, {
                    toValue: 0,
                    duration: timeOfJump * downJump,
                    easing: Easing.linear()
                })
            ]).start()
        }
    }

    render() {
        console.log('rerender hero', Date.now());
       return (
            <Animate.G ref={ref => this._hero = ref} y={-heightOfJump}>
                <G y={height - distanceWithRespectToGround}>
                    {getHeroByType(this.props.type)}
                </G>
                {/*<Bear/>*/}
            </Animate.G>
        )
    }
}

Hero.propTypes = {
    action: PropTypes.string,
    type: PropTypes.string.isRequired
};

export default Hero;

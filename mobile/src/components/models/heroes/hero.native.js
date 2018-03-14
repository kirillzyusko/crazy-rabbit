import React, { Component } from 'react';
import {
    Animated,
    Easing
} from 'react-native';
import { Animate } from './../../../engine/animation/index';
import Rabbit from "./catalog/rabbit.native";
import Bear from "./catalog/bear.native";
import { heightOfJump, timeOfJump } from "../../../engine/constants";

class Hero extends Component {
    constructor() {
        super();
        this.animatedValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.animatedValue.addListener((height) => {
            this._hero.setNativeProps({ matrix: [1, 0, 0, 1, 0, -height.value * heightOfJump - heightOfJump] });
        });
        this.animate();
    }

    animate() {
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: timeOfJump,
                easing: Easing.linear()
            }
        ).start(() => this.animate)
    }

    render() {
       return (
            <Animate.G ref={ref => this._hero = ref}>
               <Rabbit/>
                {/*<Bear/>*/}
            </Animate.G>
        )
    }
}

export default Hero;
import React, { Component, PropTypes } from 'react';
import {
    Animated,
    Easing
} from 'react-native';
import { Animate } from './../../../engine/animation';
import Rabbit from "./catalog/rabbit.native";
import Bear from "./catalog/bear.native";
import { heightOfJump, timeOfJump } from "../../../engine/constants";
import { JUMP } from "../../../actions";

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

    animate() {
        this.animatedValue.setValue(0);
        Animated.sequence([
            Animated.timing(this.animatedValue, {
                toValue: 1,
                duration: timeOfJump,
                easing: Easing.linear()
            }),
            Animated.timing(this.animatedValue, {
                toValue: 0,
                duration: timeOfJump,
                easing: Easing.linear()
            })
        ]).start()
    }

    render() {
       return (
            <Animate.G ref={ref => this._hero = ref} y={-heightOfJump}>
               <Rabbit/>
                {/*<Bear/>*/}
            </Animate.G>
        )
    }
}

Hero.propTypes = {
  //action: PropTypes.string.isRequired
};

export default Hero;

import React, { Component } from 'react';
import {
    Animated as RNAnimated,
    Easing
} from 'react-native';
import { G } from 'react-native-svg';
import Rabbit from "./catalog/rabbit.native";
import {defaultAlignmentY} from "../../../engine/constants";

const Animated = {
    ...RNAnimated,
    G: RNAnimated.createAnimatedComponent(G)
};

class Hero extends Component {
    constructor() {
        super();
        this.state = {
            isForward: true,
            rotation: 200
        };
        this.animatedValue = new RNAnimated.Value(0);
    }

    componentDidMount() {
        //this.animate();
        setInterval(this.jump, 1)
        //this.jump();
    }

    jump = () => {
        if (this.state.isForward) {
            if (this.state.rotation > 0) {
                this.setState({rotation: this.state.rotation - 8});
            } else {
                this.setState({isForward: false});
            }
        } else {
            if (this.state.rotation < 200) {
                this.setState({rotation: this.state.rotation + 8});
            } else {
                console.log(Date.now());
                this.setState({isForward: null});
            }
        }
    };

    animate() {
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear()
            }
        ).start(() => this.animate)
    }

    render() {
        const movingMargin = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 300, 100]
        });

        return (
            <Animated.G y={defaultAlignmentY + this.state.rotation} style={{marginBottom: movingMargin}}>
               <Rabbit/>
            </Animated.G>
        )
    }
}

export default Hero;
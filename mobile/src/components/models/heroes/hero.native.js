import React, { Component } from 'react';
import {
    Animated,
    Easing
} from 'react-native';
import { Animate } from './../../../engine/animation/index';
import Rabbit from "./catalog/rabbit.native";
import Bear from "./catalog/bear.native";
import {heightOfJump} from "../../../engine/constants";

class Hero extends Component {
    constructor() {
        super();
        this.state = {
            isForward: true,
            rotation: 200
        };
        this.animatedValue = new Animated.Value(0);

        this.animatedValue.addListener( (circleRadius) => {
            this._animatedGroup.setNativeProps({ matrix: [1, 0, 0, 1, 0, -circleRadius.value*heightOfJump - heightOfJump] });
        });
    }

    componentDidMount() {
        this.animate();
        //setInterval(this.jump, 1)
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
       return (
            <Animate.G ref={ ref => this._animatedGroup = ref }>
               <Rabbit/>
                {/*<Bear/>*/}
            </Animate.G>
        )
    }
}

export default Hero;
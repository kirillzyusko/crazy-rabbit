import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Animated,
    View,
    TouchableWithoutFeedback,
    ART
} from 'react-native';
import Dimensions from 'Dimensions';

const {
    width,
    height
} = Dimensions.get('window');

const {
    Surface,
    Shape,
    Path,
    Group,
    Transform
} = ART;

const AnimatedShape = Animated.createAnimatedComponent(Shape);
const AnimatedGroup = Animated.createAnimatedComponent(Group);


class AnimatedCircle extends Component {
    render() {
        const radius = this.props.radius;

        const path = Path().moveTo(0, -radius)
            .arc(0, radius * 2, radius)
            .arc(0, radius * -2, radius)
            .close();
        return <AnimatedShape {...this.props} d={path} />;
    }
};

var MORTAR_RADIUS = 5;
type Props = {};
export default class App extends Component<Props> {
    constructor () {
        super();
        this.state = {
            fireworks: []
        };
    }

    _handleAddFirework = (e) => {
        var _shootingPosition = new Animated.ValueXY({x: width/2, y: height - MORTAR_RADIUS});

        this.state.fireworks.push({
                                      shootingPosition: _shootingPosition,
                                  });

        Animated.timing(_shootingPosition, {
            duration: 13300,
            toValue: {
                y: e.nativeEvent.locationY,
                x: e.nativeEvent.locationX
            }
        }).start()

        this.setState(this.state);
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this._handleAddFirework}>
                    <View>
                        <Surface width={width} height={height}>
                            {
                                this.state.fireworks.map((firework) => {
                                    return <AnimatedCircle
                                        radius={MORTAR_RADIUS}
                                        x={firework.shootingPosition.x}
                                        y={firework.shootingPosition.y}
                                        fill="#000"
                                    />
                                })
                            }
                        </Surface>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
});
import React, { PureComponent } from 'react';
import { Animated, Easing, Image } from 'react-native';
import {
  height,
  oneBackgroundFrameWidth,
  timeOfBackgroundMovement,
  width
} from '../../../../../engine/constants/engine';
import background from './components/forest-light-new-2.png';

const style = {
  position: 'absolute',
  right: -width
};

class BackgroundForest extends PureComponent {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate();
  }

  animate = () => {
    this.animatedValue.setValue(0);
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: timeOfBackgroundMovement * 4,
        easing: Easing.linear,
        useNativeDriver: true
      }
    ).start(() => this.animate());
  };

  render() {
    const moving = {
      transform: [
        {
          translateX: this.animatedValue.interpolate(
		  {
              inputRange: [0, 1],
              outputRange: [0, -oneBackgroundFrameWidth]
            }
          )
        }
      ]
    };

    return (
      <Animated.View style={[style, moving]}>
        <Image
          style={{ left: width / 2, width: width * 3, height: height + 0.01 * height, resizeMode: 'contain' }}
          source={background}
        />
      </Animated.View>
    );
  }
}

export default BackgroundForest;

import React, { PureComponent } from 'react';
import {Animated, Easing, Image} from 'react-native';
import {
	height,
	oneBackgroundFrameWidth,
	timeOfBackgroundMovement,
	width
} from '../../../../../engine/constants/engine';

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
				duration: timeOfBackgroundMovement*4,
				easing: Easing.linear,
				useNativeDriver: true
			}
		).start(() => this.animate());
    };

  render() {
  	console.log('rerender background');
	  const moving = {
		  transform: [
			  {
				  translateX: this.animatedValue.interpolate({
					  inputRange: [0, 1],
					  outputRange: [0, -oneBackgroundFrameWidth]
				  })
			  }
		  ]
	  };

    return (
        <Animated.View style={[ style, moving ]}>
			<Image
				style={{left: width/2, width: width*3, height: height, resizeMode: 'contain'}}
				source={require('./components/forest-full-light-2.png')}
			/>
        </Animated.View>
    );
  }
}

export default BackgroundForest;

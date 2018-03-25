import React, { PureComponent } from 'react';
import {Animated, Easing, Image} from 'react-native';/*
import Svg, { Image } from 'react-native-svg';*/
import {
	height, heightOfJump, oneBackgroundFrameWidth, timeOfBackgroundMovement, timeOfJump, upperJump,
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

	  console.log('width of one screen: ' , 0.9*width);

    return (
        <Animated.View style={[ style, moving ]}>
			<Image
				style={{left: width/2, width: width*3, height: height, resizeMode: 'contain'}}
				source={require('./components/forest-full-light-2.png')}
			/>
          {/*<Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            <Image
              x="0%"
              y="0%"
              width={width}
              height={height}
              preserveAspectRatio="xMidYMid slice"
              opacity="1"
              href={require('./components/forest-full-light.png')}
            />
          </Svg>*/}
        </Animated.View>
    );
  }
}

export default BackgroundForest;

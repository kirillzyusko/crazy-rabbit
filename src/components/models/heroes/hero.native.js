import React, { Component } from 'react';
import {
  Animated,
  Easing
} from 'react-native';
import Svg, { G } from 'react-native-svg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  distanceWithRespectToGround,
  height,
  heightOfHero,
  heightOfJump,
  heightOfOneBlock,
  heroScalability,
  timeOfJump,
  upperJump,
  widthOfHero
} from '../../../engine/constants/engine';
import { getHeroByType } from '../../../utils/hero.native';
import { COLLISION, LONG_JUMP, SHORT_JUMP } from '../../../engine/constants/hero';

/**
 * @param isJump - boolean
 * @param jumpHeight - number (count of block)
 * @param blockCountRelativeCurrentPosition - number
 * @return Object (contains information about path of movement)
 **/
const getMatrixForJump = (blockCountRelativeCurrentPosition, jumpHeight, isJump) => {
  console.log('matrix for: ', blockCountRelativeCurrentPosition, jumpHeight);
  return isJump ?
    {
      inputRange: [0, upperJump, 1],
      outputRange: [0, -heightOfJump * jumpHeight, blockCountRelativeCurrentPosition * (-heightOfOneBlock)]
    }
    :
    {
      inputRange: [0, 1],
      outputRange: [0, blockCountRelativeCurrentPosition * (-heightOfOneBlock)]
    };
};

const getJumpHeight = type => (type === LONG_JUMP ? 2 : 1);
const FLASH_COUNT = 5;

class Hero extends Component {
  constructor() {
    super();

    this.state = {
      currentPosition: 0,
      jumpHeight: 1,
      flashCount: 0
    };
    this.animatedValue = new Animated.Value(0);
    this.opacity = new Animated.Value(1);
  }

  componentDidMount() {
    // this.animateBump();
  }

  // todo: replace it to getDerivedStateFromProps
  componentWillReceiveProps(nextProps) {
    if (nextProps.action === LONG_JUMP) {
      console.log('long');
      this.setState({ jumpHeight: getJumpHeight(LONG_JUMP) });
      this.animateJump(nextProps.nextPosition);
    } else if (nextProps.action === SHORT_JUMP) {
      console.log('short');
      this.setState({ jumpHeight: getJumpHeight(SHORT_JUMP) });
      this.animateJump(nextProps.nextPosition);
    } else if (nextProps.action === COLLISION) {
      console.log('collision');
      this.animateBump();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { currentPosition, jumpHeight } = this.state;
    return nextState.currentPosition !== currentPosition || nextState.jumpHeight !== jumpHeight;
  }

  animateBump() {
    Animated.sequence([
      Animated.timing(this.opacity, {
        toValue: 0.5,
        duration: 100,
        useNativeDriver: true
      }),
      Animated.timing(this.opacity, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true
      })
    ]).start(() => {
      if (this.state.flashCount < FLASH_COUNT) {
        this.setState({ flashCount: this.state.flashCount + 1 });
        this.animateBump();
      } else {
        this.setState({ flashCount: 0 });
      }
    });
  }

  animateJump(nextPosition) {
    if (this.animatedValue._value === 0) {
      this.animatedValue.setValue(0);
      Animated.timing(
        this.animatedValue,
        {
          toValue: 1,
          duration: timeOfJump,
          easing: Easing.linear,
          useNativeDriver: true
        }
      ).start(() => {
        this.animatedValue.setValue(0);
        this.setState({ currentPosition: this.state.currentPosition + nextPosition }); // todo: реальные позиции задаются через redux - это только для лесенки нужно
      });
    }
  }

  render() {
    console.log('rerender hero', this.props.nextPosition, this.state.jumpHeight);

    const { currentPosition } = this.state;
    const style = {
      position: 'absolute',
      top: height - 1.5 * distanceWithRespectToGround - currentPosition * heightOfOneBlock
    };
    const top = {
      transform: [
        {
          translateY: this.animatedValue.interpolate(getMatrixForJump(this.props.nextPosition, this.state.jumpHeight, true))
        }
      ]
    };
    const opacity = {
      opacity: this.opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
      })
    };

    return (
      <Animated.View style={[style, top, opacity]}>
        <Svg width={widthOfHero * heroScalability} height={heightOfHero * heroScalability}>
          <G transform={{ scale: heroScalability }}>
            {getHeroByType(this.props.type)}
          </G>
        </Svg>
      </Animated.View>
    );
  }
}

Hero.propTypes = {
  action: PropTypes.string,
  type: PropTypes.string.isRequired,
  nextPosition: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  action: state.hero.action,
  type: state.hero.type,
  nextPosition: state.hero.nextPosition
});

export default connect(mapStateToProps, null)(Hero);

import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import { RABBIT, BEAR, BIRD, MOUSE } from './utils/characters';
import Rabbit from './catalog/Rabbit';
import Bear from './catalog/Bear';
import Bird from './catalog/Bird';
import Mouse from './catalog/Mouse';
import { JUMP } from '../../../actions/index';
import { oneBlockHeight, defaultHeight, heightOfJump, timeOfJump } from '../../../engine/utils/constants';

const getHeroByType = (type) => {
  switch(type) {
    case RABBIT:
      return <Rabbit/>;
    case BEAR:
      return <Bear />;
    case MOUSE:
      return <Mouse/>;
    case BIRD:
      return <Bird/>;
    default:
      return <Rabbit/>;
  }
};

const getPosition = (currentHeight) => {
  return `translate(0, -${defaultHeight + currentHeight*oneBlockHeight})`;
};

const getMovement = (currentHeight, futureHeight) => {
  const moveVertically = keyframes`
  0% {
    transform: translateY(-${defaultHeight + currentHeight*oneBlockHeight}px);
  }
  35% {
    transform: translateY(-${defaultHeight + currentHeight*oneBlockHeight + heightOfJump}px);
  }
  100% {
    transform: translateY(-${defaultHeight + futureHeight*oneBlockHeight}px); 
  }
`;

  const move = styled.g`
  animation: ${moveVertically} ${timeOfJump}ms linear;
`;

  return move;
};

class Hero extends Component {
  constructor(props) {
    super(props);
    const { hero } = props;

    this.state = {
      currentHeight: 0,
      isJumping: null,
      character: getHeroByType(hero)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.action === JUMP) {
      this.jump();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.wasActionCleared(nextProps)) return false;
    return !this.isTheSameState(nextProps, nextState);
  }

  isTheSameState = (nextProps, nextState) => isEqual(nextProps, this.props) && isEqual(nextState, this.state);

  wasActionCleared = (nextProps) => this.props.action !== null && nextProps.action === null;

  jump = () => {
    if(!this.state.isJumping) {
      this.setState({isJumping: true});
      setTimeout(this.jumpDisable, timeOfJump);
    }
  };

  jumpDisable = () => {
    this.setState({isJumping: false});
    this.setState({currentHeight: this.props.futureHeight})
  };

  render() {
    const { character, isJumping } = this.state;
    const { currentHeight, futureHeight } = this.props;
    const transform = getPosition(this.state.currentHeight);
    const Move = getMovement(currentHeight, futureHeight);

    return (
      isJumping ?
        <Move>
          <g>
            {character}
          </g>
        </Move>
        :
        <g transform={`${transform}`}>
          {character}
        </g>
    );
  }
}

Hero.propTypes = {
  currentHeight: PropTypes.number.isRequired,
  futureHeight: PropTypes.number.isRequired,
  hero: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired
};

export default Hero;

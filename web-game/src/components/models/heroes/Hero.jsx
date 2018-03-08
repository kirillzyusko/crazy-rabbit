import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { RABBIT, BEAR, BIRD, MOUSE } from './utils/characters';
import Rabbit from './catalog/Rabbit';
import Bear from './catalog/Bear';
import Bird from './catalog/Bird';
import Mouse from './catalog/Mouse';
import { JUMP } from '../../../actions/index';

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

const moveVertically = keyframes`
  0% {
    transform: translateY(0);
  }
  35% {
    transform: translateY(-300px);
  }
  100% {
    transform: translateY(0); 
  }
`;

const Move = styled.g`
  animation: ${moveVertically} 1s linear;
`;

class Hero extends Component {
  constructor() {
    super();
    this.state = {
      isJumping: null
    };
  }

  componentDidMount() {
    this.setState({isJumping: true});
    setTimeout(() => this.setState({isJumping: null}), 1000);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.action === JUMP) {
      this.jump();
    }
  }

  jump = () => {
    this.setState({isJumping: true});
    setTimeout(() => this.setState({isJumping: false}), 1000);
  };

  render() {
    const { hero } = this.props;
    const character = getHeroByType(hero);
    const transform = `translate(0, -100)`;

    return (
      this.state.isJumping ?
        <Move>
          <g transform={`${transform}`}>
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
  hero: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired
};

export default Hero;

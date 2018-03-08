import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { JUMP } from '../../actions';
import Rabbit from "../models/heroes/catalog/Rabbit";

const moveVertically = keyframes`
  0% {
    transform: translateY(0);
  }
  60% {
    transform: translateY(-200px);
  }
  100% {
    transform: translateY(0); 
  }
`;

const Move = styled.g`
  animation: ${moveVertically} 0.5s linear;
`;

class Objecta extends Component {
  constructor() {
   super();
   this.state = {
     rotation: 0,
     isForward: true,
     isJumping: null
   }
  }

  componentDidMount() {
    //this.runAnimation();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.action === JUMP) {
      console.log(Date.now());
      //this.runAnimation();
      this.setState({isJumping: true});
      setTimeout(() => this.setState({isJumping: false}), 500);
    }
  }

  increaseAngleOfRotation = () => {
    if (this.state.isForward) {
      if (this.state.rotation < 200) {
        this.setState({rotation: this.state.rotation + 15});
      } else {
        this.setState({isForward: false});
      }
    } else {
      if (this.state.rotation > 0) {
        this.setState({rotation: this.state.rotation - 15});
      } else {
        console.log(Date.now());
        this.setState({isForward: null});
      }
    }
  };

  runAnimation = () => {
    setTimeout(() => {
      this.increaseAngleOfRotation();
      if (this.state.isForward !== null) {
        setTimeout(this.runAnimation, 1)
      } else {
        this.setState({isForward: true});
      }
    }, 1)
  };

  render() {
    const transform = `translate(0, -${this.state.rotation + 100})`;
    const {
      size: {
        x, y
      },
      align: {
        w, h
      },
    } = this.props;

    return (
      this.state.isJumping ?
        <Move>
          <g transform={`${transform}`}>
            <Rabbit />
          </g>
        </Move>
        :
      <g transform={`${transform}`}>
        <Rabbit />
      </g>
    );
  }
}

export default Objecta;

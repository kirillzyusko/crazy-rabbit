import React, { Component } from 'react';

class Objecta extends Component {
  constructor() {
   super();
   this.state = {
     rotation: 0
   }
  }

  componentDidMount() {
    this.runAnimation();
  }

  increaseAngleOfRotation = () => {
    console.log('rotate');
    this.setState({ rotation: this.state.rotation + 1 });
  };

  runAnimation = () => {
    setInterval(() => {
      this.increaseAngleOfRotation();
    }, 10);
  };

  render() {
    const transform = `rotate(${this.state.rotation}, 0, 0)`;
    const {
      size: {
        x, y
      },
      align: {
        w, h
      },
    } = this.props;

    return (
      <g transform={transform}>
        <path d={`M ${10*w} ${10*h} C ${20*x} ${20*y}, ${40*x} ${20*y}, ${50*x} ${10*y}`} stroke="black" fill="transparent" />
      </g>
    );
  }
}

export default Objecta;

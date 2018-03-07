import React, { Component } from 'react';
import { JUMP } from '../../actions';

class Objecta extends Component {
  constructor() {
   super();
   this.state = {
     rotation: 0,
     isForward: true
   }
  }

  componentDidMount() {
    this.runAnimation();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.action === JUMP) {
      console.log(Date.now());
      this.runAnimation();
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
    const transform = `translate(0, -${this.state.rotation+100})`;
    const {
      size: {
        x, y
      },
      align: {
        w, h
      },
    } = this.props;

    return (
      <g transform={`${transform}`}>
        <defs>
          <linearGradient id="id0" gradientUnits="userSpaceOnUse" x1="77.8489" y1="44.6823" x2="131.779" y2="44.6823">
            <stop offset="0" stop-color="#90E1E8"/>
            <stop offset="1" stop-color="#92E0E6"/>
          </linearGradient>
          <linearGradient id="id1" gradientUnits="userSpaceOnUse" x1="7.19434" y1="45.6986" x2="74.9551" y2="45.6986">
            <stop offset="0" stop-color="#92E0E8"/>
            <stop offset="1" stop-color="#93E0E6"/>
          </linearGradient>
          <linearGradient id="id2" gradientUnits="userSpaceOnUse" x1="84.2896" y1="170.609" x2="119.868" y2="170.609">
            <stop offset="0" stop-color="#31C4CB"/>
            <stop offset="1" stop-color="#8EE2E6"/>
          </linearGradient>
          <linearGradient id="id3" gradientUnits="userSpaceOnUse" x1="43.2966" y1="123.435" x2="133.773" y2="123.435">
            <stop offset="0" stop-color="#32C6CF"/>
            <stop offset="1" stop-color="#90E1E6"/>
          </linearGradient>
          <linearGradient id="id4" gradientUnits="userSpaceOnUse" x1="90.5237" y1="114.237" x2="114.085" y2="114.237">
            <stop offset="0" stop-color="#FDFFFF"/>
            <stop offset="1" stop-color="white"/>
          </linearGradient>
          <linearGradient id="id5" gradientUnits="userSpaceOnUse" x1="113.804" y1="119.42" x2="131.521" y2="119.42">
            <stop offset="0" stop-color="white"/>
            <stop offset="1" stop-color="#FCFFFF"/>
          </linearGradient>
          <linearGradient id="id6" gradientUnits="userSpaceOnUse" x1="51.421" y1="176.028" x2="91.4759" y2="176.028">
            <stop offset="0" stop-color="#90E1E6"/>
            <stop offset="1" stop-color="#30C8CD"/>
          </linearGradient>
        </defs>
        <g id="Слой_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer"/>
          <path fill="url(#id0)" stroke="#2B2A29" stroke-width="0.850144" d="M79 82c2,0 5,0 6,-1 2,-1 2,-3 3,-5 1,-2 2,-5 3,-8 2,-2 3,-5 5,-7 1,-3 2,-4 4,-6 2,-2 4,-3 6,-5 2,-2 4,-4 6,-6 3,-2 5,-4 7,-5 2,-2 4,-4 6,-6 2,-2 3,-3 4,-5 1,-2 2,-4 3,-6 0,-3 0,-6 -1,-8 0,-2 -1,-4 -2,-5 0,-1 -1,-1 -3,-1 -3,-1 -7,-1 -10,0 -3,0 -5,1 -6,2 -2,1 -3,2 -5,3 -1,1 -3,3 -5,4 -1,1 -2,3 -3,4 -2,2 -3,3 -4,4 -1,2 -2,3 -3,5 -1,2 -2,4 -2,6 -1,2 -2,4 -2,6 -1,2 -2,4 -3,6 -1,2 -1,3 -2,5 -1,3 -1,5 -2,7 0,3 0,5 -1,7 0,2 0,4 0,5 0,2 0,4 0,5 0,2 0,4 1,5z"/>
          <path fill="url(#id1)" stroke="#2B2A29" stroke-width="0.850144" d="M68 85c-2,-1 -2,-2 -3,-4 -1,-2 -2,-4 -3,-5 -2,-2 -3,-4 -4,-6 -1,-1 -2,-3 -3,-5 -1,-2 -3,-4 -5,-6 -1,-2 -3,-3 -4,-5 -2,-2 -4,-3 -5,-4 -2,-2 -3,-3 -4,-4 -1,-1 -3,-2 -4,-2 -1,-1 -3,-2 -5,-3 -1,0 -3,-1 -4,-2 -2,-1 -3,-2 -4,-3 -1,-1 -3,-2 -4,-3 -1,-1 -2,-2 -3,-2 -1,-1 -1,-2 -2,-3 0,0 0,-1 -1,-2 0,-1 -1,-2 -1,-3 -1,-1 -1,-2 -1,-4 -1,-1 -1,-3 -1,-4 1,-2 1,-3 2,-4 1,-1 2,-2 3,-3 1,0 2,-1 4,-1 2,0 4,0 6,0 2,0 4,0 6,0 2,1 4,1 5,2 2,1 4,2 6,4 2,1 4,3 6,4 2,2 4,4 5,7 2,2 4,4 5,7 2,2 3,4 5,6 1,2 2,4 3,5 0,2 1,4 2,6 1,2 2,5 3,7 0,2 1,3 2,4 0,2 1,3 1,4 0,1 0,2 0,2 1,1 1,2 1,3 1,1 1,2 1,3 1,2 1,4 1,6 1,2 1,4 0,5 -1,2 -4,3 -6,3z"/>
          <ellipse fill="url(#id2)" stroke="#2B2A29" stroke-width="0.850144" cx="102" cy="171" rx="18" ry="8"/>
          <ellipse fill="#90E1E6" stroke="#2B2A29" stroke-width="0.850144" transform="matrix(0.649096 0.580389 -0.481408 0.538398 141.741 139.86)" rx="15" ry="13"/>
          <ellipse fill="#93E1E9" stroke="#2B2A29" stroke-width="0.850144" transform="matrix(0.623607 -0.673377 0.673377 0.623607 41.8408 149.488)" rx="20" ry="10"/>
          <circle fill="url(#id3)" stroke="#2B2A29" stroke-width="0.850144" cx="89" cy="123" r="45"/>
          <path fill="none" stroke="#2B2A29" stroke-width="0.850144" d="M84 128c25,25 45,11 45,11"/>
          <ellipse fill="url(#id4)" stroke="#2B2A29" stroke-width="0.850144" cx="102" cy="114" rx="12" ry="18"/>
          <ellipse fill="url(#id5)" stroke="#2B2A29" stroke-width="0.850144" cx="123" cy="119" rx="9" ry="14"/>
          <ellipse fill="#010101" stroke="#2B2A29" stroke-width="0.850144" cx="109" cy="121" rx="3" ry="4"/>
          <circle fill="black" stroke="#2B2A29" stroke-width="0.850144" cx="119" cy="121" r="3"/>
          <path fill="none" stroke="#2B2A29" stroke-width="0.850144" d="M114 135c0,0 0,1 0,2 0,0 0,1 0,2 -1,0 -1,0 -1,1 0,0 0,1 -1,1 0,0 0,1 -1,1"/>
          <rect fill="#FFFFFE" stroke="#2B2A29" stroke-width="0.425072" x="102" y="142" width="7.42477" height="7.89318"/>
          <rect fill="#FDFFFF" stroke="#2B2A29" stroke-width="0.425072" x="109" y="143" width="7.30437" height="10.9562"/>
          <circle fill="#FE4662" stroke="#2B2A29" stroke-width="0.850144" cx="115" cy="130" r="4"/>
          <path fill="none" stroke="#2B2A29" stroke-width="2.12536" d="M95 89c1,0 2,0 4,0 1,0 2,0 3,0 1,0 2,0 2,1 1,0 2,1 2,2"/>
          <path fill="none" stroke="#2B2A29" stroke-width="2.12536" d="M116 95c1,0 2,0 2,0 1,0 2,0 3,1 0,0 1,0 2,1 0,0 1,0 1,1"/>
          <ellipse fill="url(#id6)" stroke="#2B2A29" stroke-width="0.850144" cx="71" cy="176" rx="20" ry="10"/>
          <line fill="none" stroke="#2B2A29" stroke-width="0.850144" x1="28" y1="161" x2="33" y2= "155" />
          <line fill="none" stroke="#2B2A29" stroke-width="0.850144" x1="34" y1="164" x2="38" y2= "158" />
          <line fill="none" stroke="#2B2A29" stroke-width="0.850144" x1="147" y1="144" x2="151" y2= "149" />
          <line fill="none" stroke="#2B2A29" stroke-width="0.850144" x1="150" y1="139" x2="154" y2= "142" />
        </g>
      </g>
    );
  }
}

export default Objecta;

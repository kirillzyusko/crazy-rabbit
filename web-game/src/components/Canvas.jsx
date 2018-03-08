import React from 'react';
import PropTypes from 'prop-types';
import Sky from './models/environment/background/Sky';
import Ground from './models/environment/background/Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';
import CurrentScore from './CurrentScore'
import FlyingObject from './FlyingObject';
import StartGame from './StartGame';
import Title from './Title';
import Leaderboard from './Leaderboard';
import { signIn } from 'auth0-web';
import CannonBall from './CannonBall';
import Heart from './Heart';
import Objecta from './sample/Object';
import Block from './models/environment/blocks/Block';
import Hero from "./models/heroes/Hero";

const Canvas = (props) => {
  const gameHeight = 1200;
  const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight];

  const lives = [];
  for (let i = 0; i < props.gameState.lives; i++) {
    const heartPosition = {
      x: -180 - (i * 70),
      y: 35
    };
    lives.push(<Heart key={i} position={heartPosition}/>);
  }

  const prop = {
    size: {
      x: 2,
      y: 2
    },
    align: {
      w: 1,
      h: 1
    }
  };

  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
      onClick={props.shoot}
    >
      <Sky />
      <Ground />
      <Block />
      {/*<Objecta action={props.action} size={prop.size} align={prop.align} />*/}
      <Hero hero={'RABBIT'} action={props.action}/>
      {/*<defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>
      <Sky />
      <Ground />

      {props.gameState.cannonBalls.map(cannonBall => (
        <CannonBall
          key={cannonBall.id}
          position={cannonBall.position}
        />
      ))}

      <CannonPipe rotation={props.angle} />
      <CannonBase />
      <CurrentScore score={props.gameState.kills} />

      { ! props.gameState.started &&
      <g>
        <StartGame onClick={() => props.startGame()} />
        <Title />
        <Leaderboard currentPlayer={props.currentPlayer} authenticate={signIn} leaderboard={props.players} />
      </g>
      }

      {props.gameState.flyingObjects.map(flyingObject => (
        <FlyingObject
          key={flyingObject.id}
          position={flyingObject.position}
        />
      ))}

      {lives}*/}
    </svg>
  );
};

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired,
  }).isRequired,
  trackMouse: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  currentPlayer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    maxScore: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }),
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    maxScore: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  })),
  shoot: PropTypes.func.isRequired,
  jump: PropTypes.func.isRequired,
  clearAction: PropTypes.func.isRequired
};

Canvas.defaultProps = {
  currentPlayer: null,
  players: null,
};

export default Canvas;

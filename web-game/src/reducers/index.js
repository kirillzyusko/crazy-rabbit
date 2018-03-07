import {
  LEADERBOARD_LOADED, LOGGED_IN,
  MOVE_OBJECTS, SHOOT, START_GAME, JUMP, CLEAR_ACTION
} from '../actions';
import moveObjects from './moveObjects';
import startGame from './startGame';
import shoot from './shoot';
import jump from './jump';
import clearAction from './clearAction';

const initialGameState = {
  started: false,
  kills: 0,
  lives: 3,
  flyingObjects: [],
  lastObjectCreatedAt: new Date(),
  currentPlayer: null,
  players: null,
  cannonBalls: [],
};

const initialState = {
  action: null,
  angle: 45,
  gameState: initialGameState,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LEADERBOARD_LOADED:
      return {
        ...state,
        players: action.players,
      };
    case LOGGED_IN:
      return {
        ...state,
        currentPlayer: action.player,
      };
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    case START_GAME:
      return startGame(state, initialGameState);
    case SHOOT:
      return shoot(state, action);
    case JUMP:
      return jump(state);
    case CLEAR_ACTION:
      return clearAction(state);
    default:
      return state;
  }
}

export default reducer;

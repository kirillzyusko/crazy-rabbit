import { checkCollisions } from './game/check-collisions';
import { action as actionEmit } from './hero/action';
import { clearAction } from './hero/clear-action';
import {
  ACTION,
  CHECK_COLLISIONS,
  CHOOSE_HERO,
  CLEAR_ACTION,
  SELECT_LEVEL, START_GAME
} from '../actions';
import { RABBIT } from '../engine/constants/hero';
import { chooseHero } from './hero/choose-hero';
import level1 from './../engine/levels/level1';
import { selectLevel } from './game/select-level';
import { startGame } from './game/start-game';

const initialState = {
  hero: {
    nextPosition: 0,
    fall: {
      time: 0,
      position: 0
    },
    action: null,
    lastActionAt: Date.now(),
    type: RABBIT
  },
  ambient: {
    blocks: [
      ...level1.blocks
    ],
    completedBlocks: [],
    blocksMap: [] // sorted blocks by alignment
  },
  game: {
    lives: 3,
    deaths: 0,
    kills: 0,
    score: 0,
    speed: 1,
    level: 1,
    startAt: Date.now(),
    timeInGame: 0,
    nextCollisionThrough: null
  }
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTION: {
      return actionEmit(state, payload);
    }
    case CLEAR_ACTION: {
      return clearAction(state);
    }
    case CHECK_COLLISIONS: {
      return checkCollisions(state);
    }
    case CHOOSE_HERO: {
      return chooseHero(state, payload);
    }
    case SELECT_LEVEL: {
      return selectLevel(state, payload);
    }
    case START_GAME: {
      return startGame(state);
    }
    default:
      return state;
  }
}

export default reducer;

export const ACTION = 'ACTION';
export const CLEAR_ACTION = 'CLEAR_ACTION';
export const CHECK_COLLISIONS = 'CHECK_COLLISIONS';
export const CHOOSE_HERO = 'CHOOSE_HERO';
export const SELECT_LEVEL = 'SELECT_LEVEL';
export const START_GAME = 'START_GAME';
export const UPDATE_POSITION = 'UPDATE_POSITION';

export const action = () => ({
  type: ACTION
});

export const clearAction = () => ({
  type: CLEAR_ACTION
});

export const checkCollisions = () => ({
  type: CHECK_COLLISIONS
});

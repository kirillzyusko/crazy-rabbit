export const JUMP = 'JUMP';
export const CLEAR_ACTION = 'CLEAR_ACTION';
export const ADD_BLOCK = 'ADD_BLOCK';
export const CHECK_COLLISIONS = 'CHECK_COLLISIONS';
export const CHOOSE_HERO = 'CHOOSE_HERO';
export const SELECT_LEVEL = 'SELECT_LEVEL';
export const START_GAME = 'START_GAME';

export const jump = () => ({
  type: JUMP
});

export const clearAction = () => ({
  type: CLEAR_ACTION
});

export const addBlock = () => ({
  type: ADD_BLOCK
});

export const checkCollisions = () => ({
  type: CHECK_COLLISIONS
});

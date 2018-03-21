export const JUMP = 'JUMP';
export const CLEAR_ACTION = 'CLEAR_ACTION';
export const ADD_BLOCK = 'ADD_BLOCK';
export const CHECK_COLLISIONS = 'CHECK_COLLISIONS';
export const CHOOSE_HERO = 'CHOOSE_HERO';

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

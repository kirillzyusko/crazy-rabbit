export const LEADERBOARD_LOADED = 'LEADERBOARD_LOADED';
export const LOGGED_IN = 'LOGGED_IN';
export const MOVE_OBJECTS = 'MOVE_OBJECTS';
export const START_GAME = 'START_GAME';
export const SHOOT = 'SHOOT';
export const JUMP = 'JUMP';
export const CLEAR_ACTION = 'CLEAR_ACTION';
export const ADD_BLOCK = 'ADD_BLOCK';

export const leaderboardLoaded = players => ({
  type: LEADERBOARD_LOADED,
  players,
});

export const loggedIn = player => ({
  type: LOGGED_IN,
  player,
});

export const moveObjects = mousePosition => ({
  type: MOVE_OBJECTS,
  mousePosition,
});

export const startGame = () => ({
  type: START_GAME,
});

export const shoot = (mousePosition) => ({
  type: SHOOT,
  mousePosition,
});

export const jump = () => ({
  type: JUMP,
});

export const clearAction = () => ({
  type: CLEAR_ACTION,
});

export const addBlock = () => ({
  type: ADD_BLOCK
})

import LEVELS from '../../engine/levels';

export const selectLevel = (state, payload) => ({
  ...state,
  ambient: {
    ...state.ambient,
    blocks: LEVELS[payload].blocks
  },
  game: {
    ...state.game,
    level: payload
  }
});

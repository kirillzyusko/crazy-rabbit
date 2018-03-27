import LEVELS from '../../engine/levels';

export const selectLevel = (state, payload) => {
	console.log(LEVELS[payload])
  return {
    ...state,
    ambient: {
      ...state.ambient,
      blocks: LEVELS[payload].blocks
    },
    game: {
      ...state.game,
      level: payload
    }
  };
};

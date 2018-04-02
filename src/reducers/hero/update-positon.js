/**
 * Need after falling of block
 * */
export const updatePosition = (state, payload) => ({
  ...state,
  hero: {
    ...state.hero,
    nextPosition: payload
  }
});

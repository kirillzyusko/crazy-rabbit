export const chooseHero = (state, payload) => ({
  ...state,
  hero: {
    ...state.hero,
    type: payload
  }
});

export const clearAction = state => ({
  ...state,
  hero: {
    ...state.hero,
    action: null,
    lastActionAt: Date.now()
  }
});

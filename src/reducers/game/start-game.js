export const startGame = state => ({
  ...state,
  game: {
    ...state.game,
    startAt: Date.now(),
    timeInGame: 0,
    score: 0
  },
  hero: {
    ...state.hero,
    lastActionAt: Date.now()
  }
});

// todo: при выборе уровня идёт эмит события START_GAME?
import { mapBlocks } from '../../../engine/handler/map-block.native';

export const startGame = state => ({
  ...state,
  game: {
    ...state.game,
    startAt: Date.now(),
    timeInGame: 0,
    score: 0,
    lives: 3,
    nextCollisionThrough: null
  },
  hero: {
    ...state.hero,
    action: null,
    lastActionAt: 0
  },
  ambient: {
    ...state.ambient,
    completedBlocks: [],
    blocksMap: mapBlocks(state.ambient.blocks)
  }
});

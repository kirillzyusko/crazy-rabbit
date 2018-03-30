// todo: при выборе уровня идёт эмит события START_GAME?
import {mapBlocks} from "../../engine/handler/map-block.native";

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
  },
  ambient: {
    ...state.ambient,
    completedBlocks: [],
    blocksMap: mapBlocks(state.ambient.blocks)
  }
});

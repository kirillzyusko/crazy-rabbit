import { getNextCollision } from '../../../engine/handler/check-collision.native';

export const checkCollisions = (state) => {
  const timeInGame = Date.now() - state.game.startAt;
  const { blocksMap } = state.ambient;
  const { lastActionAt, nextPosition } = state.hero;
  const options = { mapBlocks: blocksMap, timeInGame, lastActionAt, jumpHeight: nextPosition };
  const { nextCollisionTime, blockId } = getNextCollision(options);

  if (nextCollisionTime !== null) {
    return {
      ...state,
      ambient: {
        ...state.ambient,
        completedBlocks: [
          ...state.ambient.completedBlocks,
          { id: blockId }
        ]
      },
      game: {
        ...state.game,
        nextCollisionThrough: nextCollisionTime - timeInGame,
        score: state.game.score + 1 // todo: make counter for real completed blocks
      }
    };
  }
  return { // is level complete?
    ...state,
    game: {
      level: state.game.level + 1
    }
  };
};

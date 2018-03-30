import { getNextCollision } from '../../engine/handler/check-collision.native';
import { COLLISION } from '../../engine/constants/hero';

export const checkCollisions = (state) => {
  const { nextCollisionTime, blockId } = getNextCollision(state.ambient.blocksMap, Date.now() - state.game.startAt, state.hero.lastActionAt, state.ambient.completedBlocks);
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
      hero: {
        ...state.hero,
        action: COLLISION,
        lastActionAt: Date.now()
      },
      game: {
        ...state.game,
        nextCollisionThrough: nextCollisionTime
      }
    };
  }
  return state; // is level complete?
};

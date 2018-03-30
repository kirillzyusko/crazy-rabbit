import { getNextCollision } from '../../engine/handler/check-collision.native';
import { COLLISION } from '../../engine/constants/hero';

export const checkCollisions = (state) => {
  const timeInGame = Date.now() - state.game.startAt;
  const { nextCollisionTime, blockId } = getNextCollision(state.ambient.blocksMap, timeInGame, state.hero.lastActionAt, state.ambient.completedBlocks);
  if (nextCollisionTime !== null) {
    console.log('timeout from redux: ', nextCollisionTime - timeInGame);
    return {
      ...state,
      ambient: {
        ...state.ambient,
        completedBlocks: [
          ...state.ambient.completedBlocks,
          { id: blockId }
        ]
      },
      /*hero: {
        ...state.hero,
        action: COLLISION,
        lastActionAt: Date.now()
      },*/
      game: {
        ...state.game,
        nextCollisionThrough: nextCollisionTime - timeInGame
      }
    };
  }
  return state; // is level complete?
};

import { getNextCollision } from '../../engine/handler/check-collision.native';
import { COLLISION } from '../../engine/constants/hero';

export const checkCollisions = (state) => {
  const collisionAt = getNextCollision(state.ambient.blocks, Date.now() - state.game.startAt, state.hero.lastActionAt, state.ambient.collidedAt);
  if (collisionAt !== null) {
    return {
      ...state,
      hero: {
        ...state.hero,
        action: COLLISION,
        lastActionAt: Date.now()
      }
    };
  }
  return state;


};

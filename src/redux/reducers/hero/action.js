import { COLLISION, LONG_JUMP } from '../../../engine/constants/hero';
import { getNextPosition } from '../../../engine/handler/position-calculate.native';
import { getJumpHeight } from '../../../utils/hero.native';

export const action = (state, type) => {
  let alignment = null;

  if (type !== COLLISION) { // type is JUMP
    const { blocksMap, blocks } = state.ambient;
    const prevPosition = state.hero.nextPosition;
    const jumpHeight = getJumpHeight(type);
    const timeInGame = Date.now() - state.game.startAt;
    const params = { mapBlocks: blocksMap, timeInGame, blocks, prevPosition, jumpHeight };
    alignment = getNextPosition(params);
  }

  return {
    ...state,
    hero: {
      ...state.hero,
      nextPosition: type !== COLLISION ? alignment.nextPosition : state.hero.nextPosition,
      fall: {
        time: type !== COLLISION ? alignment.fall.time : state.hero.fall.time,
        position: type !== COLLISION ? alignment.fall.position : state.hero.fall.position
      },
      lives: type === COLLISION ? state.hero.lives - 1 : state.hero.lives,
      action: type,
      lastActionAt: Date.now()
    },
    game: {
      ...state.game,
      lives: type === COLLISION ? state.game.lives - 1 : state.game.lives
    }
  };
};

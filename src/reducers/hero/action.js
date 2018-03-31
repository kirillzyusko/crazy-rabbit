import {COLLISION, LONG_JUMP} from '../../engine/constants/hero';
import { getNextPosition } from '../../engine/handler/position-calculate.native';
//todo: simplify parametrs of getNextPosition
export const action = (state, type) => ({
  ...state,
  hero: {
    ...state.hero,
    nextPosition: type !== COLLISION ? getNextPosition(state.ambient.blocksMap, Date.now() - state.game.startAt, state.ambient.blocks, state.hero.nextPosition, type === LONG_JUMP ? 2 : 1) : state.hero.nextPosition,
    action: type,
    lastActionAt: Date.now()
  }
});

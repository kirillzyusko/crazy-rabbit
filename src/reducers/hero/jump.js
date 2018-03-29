import { JUMP } from '../../actions/index';
import {LONG_JUMP} from "../../engine/constants/hero";

export const jump = (state, type) => ({
  ...state,
  hero: {
    ...state.hero,
    nextPosition: type === LONG_JUMP ? 2 : 1,
    action: type,
    lastActionAt: Date.now()
  }
});

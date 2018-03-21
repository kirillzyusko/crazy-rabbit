import { JUMP } from '../../actions/index';

export const jump = state => ({
  ...state,
  hero: {
    ...state.hero,
    action: JUMP,
    lastActionAt: Date.now()
  }
});

import { JUMP } from '../actions';

function shoot(state) {
  return {
    ...state,
    action: JUMP,
    lastActionAt: Date.now()
  };
}

export default shoot;

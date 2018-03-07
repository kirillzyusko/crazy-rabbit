import { JUMP } from '../actions';

function shoot(state) {
  return {
    ...state,
    action: JUMP
  };
}

export default shoot;

import { checkCollision } from '../engine/utils/formulas';
import { gameHeight } from '../engine/utils/constants';

const blockMovementTime = 2000;

const checkCollisions = (state) => {
  const now = Date.now();
  const { gameState: { blocks } } = state;
  //console.log(state);
  blocks.forEach((block) => {
    const alignmentOfBlcok = now - block.createdAt;
    const isJumping = state.lastActionAt + 1000 > now;
    if(alignmentOfBlcok < 1200 && alignmentOfBlcok > 800 && !isJumping) {
      //console.log('заяц сдох');
    }
  });
  return state;
};

export default checkCollisions;

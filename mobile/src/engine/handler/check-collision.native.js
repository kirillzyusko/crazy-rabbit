import {inaccuraciesTimeForCollision, timeOfBlockMovement, timeOfJump} from '../constants';

export const checkCollisions = (state) => {
    const now = Date.now();
    const { blocks } = state;
    let newState = {...state};
    blocks.forEach((block) => {
        const alignmentOfBlock = now - block.createdAt;
        const isJumping = state.lastActionAt + timeOfJump > now;
        if (alignmentOfBlock < timeOfBlockMovement + inaccuraciesTimeForCollision && alignmentOfBlock > timeOfBlockMovement - inaccuraciesTimeForCollision && !isJumping) {
            newState.lives = 0;
        }
    });
    return newState;
};

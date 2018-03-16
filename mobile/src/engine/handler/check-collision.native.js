import {inaccuraciesTimeForCollision, timeOfBlockMovement, timeOfJump} from '../constants';

export const wasCollision = (blocks, lastActionAt) => {
    const now = Date.now();
    let wasCollision = false;

    blocks.forEach((block) => {
        const alignmentOfBlock = now - block.createdAt;
        const isJumping = lastActionAt + timeOfJump > now;

        if (alignmentOfBlock < timeOfBlockMovement + inaccuraciesTimeForCollision && alignmentOfBlock > timeOfBlockMovement - inaccuraciesTimeForCollision && !isJumping) {
            console.log(block.createdAt, alignmentOfBlock, timeOfBlockMovement + inaccuraciesTimeForCollision, timeOfBlockMovement - inaccuraciesTimeForCollision);
            wasCollision = true;
        }
    });

    return wasCollision;
};

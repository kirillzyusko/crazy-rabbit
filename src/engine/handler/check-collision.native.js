import {
  inaccuraciesTimeForCollision,
  timeOfBlockMovement,
  timeOfJump
} from '../constants/engine';

export const getCollision = (blocks, lastActionAt, collidedAt) => {
  const now = Date.now();
  let collisionAt = null;

  blocks.forEach((block) => {
    const alignmentOfBlock = now - block.createdAt;
    const isJumping = lastActionAt + timeOfJump > now;
    const isAlreadyCollided = collidedAt.some(timestamp => timestamp === block.createdAt);
    const isHitFront = alignmentOfBlock < timeOfBlockMovement + inaccuraciesTimeForCollision;
    const isHitBack = alignmentOfBlock > timeOfBlockMovement - inaccuraciesTimeForCollision;

    if (isHitFront && isHitBack && !isJumping && !isAlreadyCollided) {
      collisionAt = block.createdAt;
    }
  });

  return collisionAt;
};

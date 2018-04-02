import { timeOfJump } from '../constants/engine';

/**
 * @return Object {nextCollisionTime, blockId}
 * */

export const getNextCollision = ({ mapBlocks, timeInGame, lastActionAt, jumpHeight }) => {
  const nextCollisionAt = {
    nextCollisionTime: null,
    blockId: null
  };

  const isJump = (Date.now() - lastActionAt) < timeOfJump;
  for (const block of mapBlocks) {
    const { align, height } = block;

    const isBeforeBlock = timeInGame < align;
    const canJumpOverBlock = isJump && jumpHeight >= height;
    const isCollision = isBeforeBlock && !canJumpOverBlock;

    if (isCollision) {
      nextCollisionAt.nextCollisionTime = align;
      nextCollisionAt.blockId = block.id;
      return nextCollisionAt;
    }
  }

  return nextCollisionAt;
};

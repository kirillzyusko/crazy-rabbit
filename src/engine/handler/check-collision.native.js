import { timeOfJump } from '../constants/engine';

/**
 * @return Object {nextCollisionTime, blockId}
 * */
    // todo: height logic implement!
export const getNextCollision = ({ mapBlocks, timeInGame, lastActionAt, jumpHeight }) => {
  const nextCollisionAt = {
    nextCollisionTime: null,
    blockId: null
  };

  const isJump = (Date.now() - lastActionAt) < timeOfJump;
  for (const block of mapBlocks) {
    const { align, height } = block;
//todo: почему здесь не калькулируется высота и столкновение с двойным блоком?
      // скорее всего из-за isBeforeBlock? он false
    const isBeforeBlock = isJump ? timeInGame + timeOfJump < align : timeInGame < align;
    const canJumpOverBlock = jumpHeight >= height;
    const isCollision = isBeforeBlock && !canJumpOverBlock;

    if (isCollision) {
      nextCollisionAt.nextCollisionTime = align;
      nextCollisionAt.blockId = block.id;
      return nextCollisionAt;
    }
  }

  return nextCollisionAt;
};

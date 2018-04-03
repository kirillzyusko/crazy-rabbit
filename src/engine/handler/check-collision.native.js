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
// todo: если идут два одиночных блока, и ты перепрыгиваешь через одни маленьким прыжком - коллизия будет браться уже для
      // следующего блока, у которога высота больше, чем высота текущего прыжка
    const isBeforeBlock = timeInGame < align;
    const canJumpOverBlock = isJump && jumpHeight >= height;
    const isCollision = isBeforeBlock && !canJumpOverBlock;
    console.log(isBeforeBlock, canJumpOverBlock, block.id);
    if (isCollision) {
      nextCollisionAt.nextCollisionTime = align;
      nextCollisionAt.blockId = block.id;
      return nextCollisionAt;
    }
  }

  return nextCollisionAt;
};

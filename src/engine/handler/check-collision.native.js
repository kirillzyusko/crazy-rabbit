import { timeOfJump } from '../constants/engine';

/**
 * @return Object {nextCollisionTime, blockId}
 * */
    // todo: height logic implement!
export const getNextCollision = (mapBlocks, timeInGame, lastActionAt, completedBlocks) => {
  const nextCollisionAt = {
    nextCollisionTime: null,
    blockId: null
  };

  const isJump = (Date.now() - lastActionAt) < timeOfJump;
  for (const block of mapBlocks) {
    const { align } = block;

    const isBeforeBlock = isJump ? timeInGame + timeOfJump < align : timeInGame < align;
    // const wasEarlier = completedBlocks.some(b => block.id === b.id);

    if (isBeforeBlock /* && !wasEarlier*/) {
      nextCollisionAt.nextCollisionTime = align;
      nextCollisionAt.blockId = block.id;
      return nextCollisionAt;
    }
  }

  return nextCollisionAt;
};

/**
 * @return Object {nextCollisionTime, blockId}
 * */
export const getNextCollision = (mapBlocks, timeInGame, lastActionAt, completedBlocks) => {
  const nextCollisionAt = {
    nextCollisionTime: null,
    blockId: null
  };

  mapBlocks.forEach((block) => {
    const { align } = block;
    const isCollision = align < timeInGame;
    const wasEarlier = completedBlocks.some(b => block.id === b.id);
    const nextBlockCollisionNotDefined = nextCollisionAt.nextCollisionTime === null;

    if (isCollision && !wasEarlier && nextBlockCollisionNotDefined) {
      console.log(`You met block: ${block.id}`, timeInGame, align);
      nextCollisionAt.nextCollisionTime = align;
      nextCollisionAt.blockId = block.id;
    }
  });

  return nextCollisionAt;
};

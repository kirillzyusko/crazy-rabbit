/**
 * @return Object {nextCollisionTime, blockId}
 * */
export const getNextCollision = (mapBlocks, timeInGame, lastActionAt, completedBlocks) => {
  const nextCollisionAt = {
    nextCollisionTime: null,
    blockId: null
  };

  for (const block of mapBlocks) {
    const { align } = block;
    const isBeforeBlock = timeInGame < align;
    const wasEarlier = completedBlocks.some(b => block.id === b.id);

    if (isBeforeBlock && !wasEarlier) {
      console.log(`next collision at: ${block.id}`, timeInGame, align);
      console.log(`timeout: ${align - timeInGame}`);
      nextCollisionAt.nextCollisionTime = align;
      nextCollisionAt.blockId = block.id;
      return nextCollisionAt;
    }
  }

  return nextCollisionAt;
};

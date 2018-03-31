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
  console.log(`is jump? ${Date.now() - lastActionAt}`);
  for (const block of mapBlocks) {
    const { align } = block;

    const isBeforeBlock = timeInGame + timeOfJump < align; // todo: timeOfJump
      // сейчас проверка наступает после прыжка - поэтому сразу прибавляем число
      // но если было столкновение - в таймауте также надо вызвать пересчёт коллизии
    // const wasEarlier = completedBlocks.some(b => block.id === b.id);

    if (isBeforeBlock /* && !wasEarlier*/) {
      console.log(`next collision at: ${block.id}`, timeInGame, align);
      console.log(`timeout: ${align - timeInGame}`);
      nextCollisionAt.nextCollisionTime = align;
      nextCollisionAt.blockId = block.id;
      return nextCollisionAt;
    }
  }

  return nextCollisionAt;
};

import { heightOfOneBlock, timeOfJump } from '../constants/engine';

/**
 * @return number count of block
 * */
export const getNextPosition = (mapBlocks, timeInGame, blocks, prevPosition, jumpHeight) => {
  for (const block of mapBlocks) {
    const { align } = block;
    const isOnBlock = timeInGame - align < 0 && timeInGame - align > -timeOfJump;

    if (isOnBlock) {
      const { height } = blocks.find(b => b.id === block.id);
		return prevPosition + jumpHeight >= height ? height : 0;
    }
  }

  return 0;//todo; previous position
};

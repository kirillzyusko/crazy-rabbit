import { timeOfJump } from '../constants/engine';

/**
 * @return Object {nextPosition, fall {time, position}}
 * */
export const getNextPosition = ({ mapBlocks, timeInGame, blocks, prevPosition, jumpHeight }) => {
  const result = {
    nextPosition: 0,
    fall: {
      time: 0, // todo: `0` могут быть разве дефолтными?
      position: 0
    }
  };

  for (const block of mapBlocks) {
    const { align } = block;
    const isOnBlock = timeInGame - align < 0 && timeInGame - align > -timeOfJump;

    if (isOnBlock) {
      console.log(timeInGame - align, timeOfJump);
      const { height } = blocks.find(b => b.id === block.id);
      result.nextPosition = prevPosition + jumpHeight >= height ? height : 0;
      result.fall.time = Math.abs((align - timeInGame) - timeOfJump);
      result.fall.position = 0; // todo: add correct calculation of position

      return result;
    }
  }

  return result;// todo; previous position
};

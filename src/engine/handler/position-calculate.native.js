import {
  heightOfOneBlock,
  heroScalability,
  timeOfBlockMovement,
  timeOfJump,
  width,
  widthOfHero
} from '../constants/engine';

/**
 * @return Object {nextPosition, fall {time, position}}
 * */
export const getNextPosition = ({ mapBlocks, timeInGame, blocks, prevPosition, jumpHeight }) => {
  const result = {
    nextPosition: 0,
    fall: {
      time: null, // todo: `0` могут быть разве дефолтными?
      position: 0
    }
  };

  for (const block of mapBlocks) {
    const { align, height } = block;
    const isJumpToBlock = timeInGame - align < 0 && timeInGame - align > -timeOfJump;
    const canJumpToBlockHeight =  prevPosition + jumpHeight >= height;
    const isOnBlock = isJumpToBlock && canJumpToBlockHeight;

    if (isOnBlock) {
      console.log('REDUX', timeInGame - align, timeOfJump);
      const { height, speed } = blocks.find(b => b.id === block.id);
      result.nextPosition = prevPosition + jumpHeight >= height ? height : 0;
      const heroAndBlockWidth = // 1.3 - we need only about `foot` dimension
        ((heightOfOneBlock + widthOfHero * heroScalability) / width / 1.3) * (timeOfBlockMovement / speed);
      const distanceBeforeBlock = align - timeInGame;
      result.fall.time = distanceBeforeBlock + heroAndBlockWidth;
      result.fall.position = 0; // todo: add correct calculation of position

      return result;
    }
  }

  return result;// todo; previous position
};

import {
	heightOfOneBlock, heroScalability,
	inaccuraciesTimeForCollision,
	timeOfBlockMovement,
	timeOfJump, width, widthOfHero
} from '../constants/engine';

export const getNextCollision = (blocks, timeInGame, lastActionAt, collidedAt) => {
  let collisionAt = null;

  blocks.forEach((block) => {
    const blockDefaultAlignment = block.appearance + timeOfBlockMovement / block.speed;
    const textureAlignment = ((heightOfOneBlock +  widthOfHero * heroScalability) / width) * (timeOfBlockMovement / block.speed);
    const blockAlign = blockDefaultAlignment - textureAlignment;
    if (blockAlign < timeInGame) {
      //console.log(`You met block: ${block.id}`, timeInGame, blockAlign, widthOfHero * heroScalability, heightOfOneBlock);
      collisionAt = true;
    }
  });

  return collisionAt;
};

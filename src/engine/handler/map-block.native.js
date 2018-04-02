import {
  timeOfBlockMovement,
  heroScalability,
  width,
  widthOfHero,
  heightOfOneBlock
} from './../constants/engine';

export const mapBlocks = blocks => blocks.map((block) => {
  const blockDefaultAlignment = block.appearance + timeOfBlockMovement / block.speed;
  const textureAlignment =
      ((heightOfOneBlock +  widthOfHero * heroScalability) / width) * (timeOfBlockMovement / block.speed);
  const blockAlign = blockDefaultAlignment - textureAlignment;

  return {
    id: block.id,
    align: blockAlign,
    height: block.height
  };
}).sort((a, b) => (a.align > b.align ? 1 : -1));

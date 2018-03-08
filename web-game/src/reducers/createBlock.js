import {
  createInterval, flyingObjectsStarterYAxis, maxFlyingObjects,
  flyingObjectsStarterPositions
} from '../engine/utils/constants';

export default (state) => {
  //if ( ! state.gameState.started) return state; // game not running

  /*const now = (new Date()).getTime();
  const { lastObjectCreatedAt, flyingObjects } = state.gameState;
  const createNewObject = (
    now - (lastObjectCreatedAt).getTime() > createInterval &&
    flyingObjects.length < maxFlyingObjects
  );

  if ( ! createNewObject) return state; // no need to create objects now*/

  const id = (new Date()).getTime();
  const predefinedPosition = Math.floor(Math.random() * maxFlyingObjects);
  const flyingObjectPosition = flyingObjectsStarterPositions[predefinedPosition];
  const newBlock = {
    position: {
      x: flyingObjectPosition,
      y: flyingObjectsStarterYAxis,
    },
    createdAt: (new Date()).getTime(),
    id,
  };

  const validBlocks = state.gameState.blocks.filter(block => block.createdAt + 1900 > (new Date()).getTime());

  return {
    ...state,
    gameState: {
      ...state.gameState,
      blocks: [
        ...validBlocks,
        newBlock
      ],
      lastObjectCreatedAt: new Date(),
    }
  }
}

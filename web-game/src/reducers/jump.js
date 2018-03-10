import { JUMP } from '../actions';

function jump(state) {
  return {
    ...state,
    gameState: {
      ...state.gameState,
      currentHeight: state.gameState.currentHeight + 1,
      futureHeight: state.gameState.futureHeight + 1
    },
    action: JUMP,
    lastActionAt: Date.now()
  };
}

export default jump;

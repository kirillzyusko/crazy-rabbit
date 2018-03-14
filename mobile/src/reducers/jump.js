import { JUMP } from '../actions';

const jump = (state = {}, action) => {
    if (action.type === JUMP) {
        return {
            ...state,
            /*gameState: {
                ...state.gameState,
                currentHeight: state.gameState.currentHeight + 1,
                futureHeight: state.gameState.futureHeight + 1
            },*/
            action: JUMP,
            lastActionAt: Date.now()
        };
    }
    return state;
};

export default jump;
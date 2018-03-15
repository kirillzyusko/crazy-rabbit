import {ADD_BLOCK} from '../actions';
import {timeOfBlockMovement} from "../engine/constants";

const ambient = (state = {}, action) => {
    const { type } = action;
    switch (type) {
        case ADD_BLOCK: {
            const now = (new Date()).getTime();
            const validBlocks = state.ambient.blocks.filter(block => block.createdAt + timeOfBlockMovement - 100 > now);

            return {
                ...state,
                ambient: {
                    ...state.ambient,
                    blocks: [
                        ...validBlocks,
                        { createdAt: now }
                    ],
                    lastObjectCreatedAt: new Date(),
                }
            }
        }
        default: return state;
    }
};

export default ambient;

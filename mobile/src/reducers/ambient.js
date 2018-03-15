import {ADD_BLOCK} from '../actions';
import {timeOfBlockMovement} from "../engine/constants";

const ambient = (state = {}, action) => {
    const { type } = action;
    switch (type) {
        case ADD_BLOCK: {
            const now = (new Date()).getTime();
            const validBlocks = state.blocks.filter(block => block.createdAt + timeOfBlockMovement > now);
            const newBlock = {
                createdAt: now
            };

            return {
                ...state.ambient,
                blocks: [
                    ...validBlocks,
                    newBlock
                ],
                lastObjectCreatedAt: new Date(),
            }
        }
        default: return state;
    }
};

export default ambient;

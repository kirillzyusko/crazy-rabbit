import {ADD_BLOCK, CHECK_COLLISIONS} from '../actions';
import {inaccuraciesTime, timeOfBlockMovement} from "../engine/constants";
import {checkCollisions} from "../engine/handler/check-collision.native";

const ambient = (state = {}, action) => {
    const { type } = action;
    switch (type) {
        case ADD_BLOCK: {
            const now = (new Date()).getTime();
            const validBlocks = state.blocks.filter(block => block.createdAt + timeOfBlockMovement + inaccuraciesTime > now);
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
        case CHECK_COLLISIONS: {
            return checkCollisions(state);
        }
        default: return state;
    }
};

export default ambient;

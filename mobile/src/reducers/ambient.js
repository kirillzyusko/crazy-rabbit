import {ADD_BLOCK, CHECK_COLLISIONS} from '../actions';
import {inaccuraciesTime, timeOfBlockMovement} from "../engine/constants";
import {wasCollision} from "../engine/handler/check-collision.native";

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
                ...state,
                blocks: [
                    ...validBlocks,
                    newBlock
                ],
                lastObjectCreatedAt: new Date(),
            }
        }
        case CHECK_COLLISIONS: {
            console.log('check colisions');
            if(wasCollision(state)) {
              return {
                  ...state,
                  lives: 0
              }
            } else {
                return state;
            }
        }
        default: return state;
    }
};

export default ambient;

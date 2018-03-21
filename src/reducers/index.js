import { addBlock } from './ambient/add-block';
import { checkCollisions } from './game/check-collisions';
import { jump } from './hero/jump';
import { clearAction } from './hero/clear-action';
import {ADD_BLOCK, CHECK_COLLISIONS, CLEAR_ACTION, JUMP} from "../actions/index";

const initialState = {
    hero: {
        action: null,
        lastActionAt: Date.now()
    },
    ambient: {
        blocks: [
            {
                createdAt: Date.now()
            }
        ],
        collidedAt: [],
        lastObjectCreatedAt: null
    },
    game: {
        lives: 3,
        deaths: 0,
        kills: 0,
        score: 0,
        speed: 1
    }
};

function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_BLOCK: {
            return addBlock(state);
        }
        case JUMP: {
            return jump(state);
        }
        case CLEAR_ACTION: {
            return clearAction(state);
        }
        case CHECK_COLLISIONS: {
            return checkCollisions(state);
        }
        default: return state;
    }
}

export default reducer;

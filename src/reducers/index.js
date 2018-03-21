import { addBlock } from './ambient/add-block';
import { checkCollisions } from './game/check-collisions';
import { jump } from './hero/jump';
import { clearAction } from './hero/clear-action';
import {ADD_BLOCK, CHECK_COLLISIONS, CHOOSE_HERO, CLEAR_ACTION, JUMP} from "../actions/index";
import {RABBIT} from "../engine/constants/hero";
import {chooseHero} from "./hero/choose-hero";

const initialState = {
    hero: {
        action: null,
        lastActionAt: Date.now(),
        type: RABBIT
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
        case CHOOSE_HERO: {
            return chooseHero(state, payload);
        }
        default:
            return state;
    }
}

export default reducer;

import { CHECK_COLLISIONS } from '../actions';
import { checkCollisions } from '../engine/handler/check-collision.native';

const game = (state = {}, action) => {
    /*const { type } = action;
    switch (type) {
        case CHECK_COLLISIONS: return checkCollisions(state);
        default: return state;
    }*/
    return state;
};

export default game;

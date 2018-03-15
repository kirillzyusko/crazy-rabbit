import {CLEAR_ACTION, JUMP} from '../actions';

const hero = (state = {}, action) => {
    const { type } = action;
    switch (type) {
        case JUMP: return {
            action: JUMP,
            lastUpdatedAt: Date.now()
        };
        case CLEAR_ACTION: {
            return {
                action: null,
                lastUpdatedAt: Date.now()
            }
        }
        default: return state;
    }
};

export default hero;
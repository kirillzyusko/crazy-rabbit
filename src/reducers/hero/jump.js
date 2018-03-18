import {JUMP} from "../../actions/index";

export const jump = (state) => {
    return {
        ...state,
        hero: {
            action: JUMP,
            lastActionAt: Date.now()
        }
    }
};
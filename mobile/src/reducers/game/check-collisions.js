import {wasCollision} from "../../engine/handler/check-collision.native";

export const checkCollisions = (state) => {
    if (wasCollision(state.ambient.blocks, state.hero.lastActionAt)) {
        return {
            ...state,
            game: {
                ...state.game,
                lives: state.game.lives - 1,
            }
        }
    } else {
        return state;
    }

};
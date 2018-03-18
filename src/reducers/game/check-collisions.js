import {getCollision} from "../../engine/handler/check-collision.native";

export const checkCollisions = (state) => {
    const collisionAt = getCollision(state.ambient.blocks, state.hero.lastActionAt, state.ambient.collidedAt);
    if (collisionAt !== null) {
        return {
            ...state,
            ambient: {
                ...state.ambient,
                collidedAt: [
                    ...state.ambient.collidedAt,
                    collisionAt
                ]
            },
            game: {
                ...state.game,
                lives: state.game.lives - 1,
            }
        }
    } else {
        return state;
    }

};
import {
    inaccuraciesTime,
    timeOfBlockMovement
} from "../../engine/constants/engine";

export const addBlock = (state) => {
    const now = (new Date()).getTime();
    const validBlocks = state.ambient.blocks.filter(block => block.createdAt + timeOfBlockMovement + inaccuraciesTime > now);
    const newBlock = {
        createdAt: now
    };

    const pointsForJumpingTheBlock = state.ambient.blocks.length - validBlocks.length;

    return {
        ...state,
        ambient: {
            ...state.ambient,
            blocks: [
                ...validBlocks,
                newBlock
            ],
            lastObjectCreatedAt: new Date(),
        },
        game: {
            ...state.game,
            score: state.game.score + pointsForJumpingTheBlock
        }
    }
};

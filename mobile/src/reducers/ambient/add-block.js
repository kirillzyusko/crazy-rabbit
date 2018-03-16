import {inaccuraciesTime, timeOfBlockMovement} from "../../engine/constants";

export const addBlock = (state) => {
    const now = (new Date()).getTime();
    const validBlocks = state.ambient.blocks.filter(block => block.createdAt + timeOfBlockMovement + inaccuraciesTime > now);
    const newBlock = {
        createdAt: now
    };

    return {
        ...state,
        ambient: {
            blocks: [
                ...validBlocks,
                newBlock
            ],
            lastObjectCreatedAt: new Date(),
        }
    }
};
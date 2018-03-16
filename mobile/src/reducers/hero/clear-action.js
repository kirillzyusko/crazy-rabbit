export const clearAction = (state) => {
    return {
        ...state,
        hero: {
            action: null,
            lastActionAt: Date.now()
        }
    }
};
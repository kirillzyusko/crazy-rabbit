export const chooseHero = (state, payload) => {
    return {
        ...state,
        hero: {
            ...state.hero,
            type: payload
        }
    }
};
